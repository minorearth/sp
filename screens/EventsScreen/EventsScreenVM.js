

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ISOdateParse, filterAll, FormatParallel, FormatClass, DataClean, extractClassParallel } from '../../utils/utils'
import { setitems } from '../../redux/userdataSlice';
import { setrefreshItems } from '../../redux/filterSlice';
import { getEvents } from '../../api/api';


export const useDetailsScreen = (navigation) => {
  const HiddenItems = useSelector(state => state.userdata.hiddenItems)
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState();
  const result = useSelector((state) => state.userdata.items)
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