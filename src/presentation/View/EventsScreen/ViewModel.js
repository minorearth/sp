
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ISOdateParse, filterAll, DataClean, extractClassParallel } from '../../../utils/utils'
import { setitems } from '../../../../src/presentation/redux/userdataSlice';
import { setrefreshItems } from '../../../../src/presentation/redux/filterSlice';
import { getEvents } from '../../../model/api/api';


export const useViewModel = (navigation) => {
  const HiddenItems = useSelector(state => {
  // console.log(state.filter)
    return state.filter.hiddenItems

  })


  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState();
  const result = useSelector((state) => {
    
    return state.userdata.items})
  const refreshItems = useSelector((state) => state.filter.refreshItems)
  const access = useSelector(state => state.userdata.person)
  const setitemsD = useDispatch()
  const selectFilter = useSelector((state) => state.filter)

  const loadData = async () => {
    const result = await getEvents()
    setitemsD(setitems(DataClean(result)))
    setIsLoading(false);
  }

  const refreshData = () => {
    if (!isLoading && HiddenItems != undefined && result != undefined) {
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

  useEffect(() => {
    refreshData()
  }, [refreshItems, isLoading]);


  return {

    response

  }






}