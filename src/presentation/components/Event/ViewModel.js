
import { sethiddenitems } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { InsertTaskUsecase } from '../../../domain/Tasks'
import { NotificationDateTime } from '../../../domain/utils'
import { LR } from '../../View/NotificationScreen/notification'
import { getTaskCompletedUserList } from '../../../model/api/api';
import { useNavigation } from '@react-navigation/native';

export const useViewModel = () => {

    const scheduleNotification = (item) => {
        const shdate = NotificationDateTime(item.item.fullDate)
        shdate != undefined && LR(shdate, item.item.Title)
    }

    useEffect(() => {
        // scheduleNotification(item)
    }
        , [])

    const access = useSelector(state => state.userdata.person)
    const name = useSelector(state => state.userdata.name)
    const classTitle = useSelector(state => state.filter.className)

    const HideItemsD = useDispatch()
    const HideItem = (id) => {
        HideItemsD(sethiddenitems(id))
    }

    const InsertTask = (Id) => {
        InsertTaskUsecase(Id, name, classTitle)
        HideItem(Id)
    }

    const navigation=useNavigation()
    const NavigateToHist = async (id) => {
        const hist = await getTaskCompletedUserList(classTitle, id)
        navigation.navigate('ScreenEventHistory', hist)
    }

    return {
        HideItem,
        InsertTask,
        scheduleNotification,
        NavigateToHist,
        access
    }
}



