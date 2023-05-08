
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setitems,setloaded } from '../../../../src/presentation/redux/userdataSlice';
import { setrefreshItems } from '../../../../src/presentation/redux/filterSlice';
import { getCleanEvents } from '../../../domain/Events'
import { filterAll } from '../../../domain/utils';
import { useNavigation } from '@react-navigation/native';

export const useViewModel = () => {
  const navigation=useNavigation()

  const [response, setResponse] = useState();


  const setitemsD = useDispatch()

  const setLoadedD = useDispatch()
  const loadData = async () => {
    const result = await getCleanEvents()
    setitemsD(setitems(result))
    setLoadedD(setloaded(true))
  }

  const RefreshItemsD = useDispatch()
  useEffect(() => {
    loadData()
    const subscribe = navigation.addListener('tabPress', (e) => {
      RefreshItemsD(setrefreshItems())
    })
  }, []);


  const result = useSelector((state) => state.userdata.items)
  const selectFilter = useSelector((state) => state.filter)
  const access = useSelector(state => state.userdata.person)
  const loaded = useSelector(state => state.userdata.loaded)

  const refreshItems = useSelector((state) => state.filter.refreshItems)
  useEffect(() => {
    loaded&&setResponse(filterAll(result, selectFilter, access, false))
  }, [refreshItems,loaded]);




  return {
    response,
  }

}