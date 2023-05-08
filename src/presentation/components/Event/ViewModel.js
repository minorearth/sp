
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { InsertTaskUsecase } from '../../../domain/Tasks'
import { NotificationDateTime } from '../../../domain/utils'
import { LR } from '../../View/NotificationScreen/notification'
import { getTaskCompletedUserList } from '../../../model/api';
import { useNavigation } from '@react-navigation/native';
import { setitems } from '../../redux/userdataSlice'
import { setrefreshItems } from '../../redux/filterSlice';
import { HideTask } from '../../../domain/Events';
import { Period} from '../../../domain/utils'


export const useViewModel = () => {
    const scheduleNotification = (item) => {
        const shdate = NotificationDateTime(item.item.fullDate)
        shdate != undefined && LR(shdate, item.item.Title)
    }

    useEffect(() => {
        // scheduleNotification(item)
    }
        , [])
    const events = useSelector((state) => state.userdata.items)
    const access = useSelector(state => state.userdata.person)
    const name = useSelector(state => state.userdata.name)
    const classTitle = useSelector(state => state.filter.className)

    const setEventsD = useDispatch()
    const RefreshItemsD = useDispatch()
    const HideItem = async (id) => {
        setEventsD(setitems(await HideTask(id, events)))
        RefreshItemsD(setrefreshItems())

    }

    const InsertTask = (Id) => {
        InsertTaskUsecase(Id, name, classTitle)
        HideItem(Id)
    }

    const navigation = useNavigation()
    const NavigateToHist = async (id) => {
        const hist = await getTaskCompletedUserList(classTitle, id)
        navigation.navigate('ScreenEventHistory', hist)
    }

    const NavigateToDetails = (teacherDescription,studentDescription) => {
        navigation.navigate('Details', access == 'Учитель' ? teacherDescription : studentDescription)
    }


    return {
        HideItem,
        InsertTask,
        scheduleNotification,
        NavigateToHist,
        NavigateToDetails,
        access,
        
    }
}



