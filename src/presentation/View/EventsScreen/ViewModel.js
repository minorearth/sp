
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterAll, DataClean, extractClassParallel } from '../../../domain/utils'
import { setitems } from '../../../../src/presentation/redux/userdataSlice';
import { setrefreshItems } from '../../../../src/presentation/redux/filterSlice';
import {getCleanEvents} from '../../../domain/Events'

export const useViewModel = (navigation) => {

  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState();
 
  
  const setitemsD = useDispatch()
  const loadData = async () => {
    const result = await getCleanEvents()
    setitemsD(setitems(result))
    setIsLoading(false);
  }

  const result = useSelector((state) => state.userdata.items)
  const selectFilter = useSelector((state) => state.filter)
  const access = useSelector(state => state.userdata.person)
  const HiddenItems = useSelector(state => state.filter.hiddenItems)

  const refreshData = () => {
    // console.log('asddddadsadasdasd')
    if (!isLoading && HiddenItems != undefined && result != undefined) {
      console.log('asddddadsadasdasd')
      const ClassParallel = extractClassParallel(selectFilter.className)
      setResponse(filterAll(result, selectFilter, ClassParallel, access, HiddenItems, false));
    }
  }

  const RefreshItemsD = useDispatch()

  useEffect(() => {
    loadData()
    const subscribe = navigation.addListener('tabPress', (e) => {
      RefreshItemsD(setrefreshItems())
    })
  }, []);

  const refreshItems = useSelector((state) => state.filter.refreshItems)
  useEffect(() => {
    refreshData()
  }, [refreshItems, isLoading]);


  return {
    response
  }

}