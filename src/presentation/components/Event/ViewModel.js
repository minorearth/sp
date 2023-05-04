
import { sethiddenitems } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { InsertTaskUsecase } from '../../../domain/Tasks'
import { NotificationDateTime } from '../../../utils/utils'
import { LR } from '../../View/NotificationScreen/notification'
import { getTaskCompletedUserList } from '../../../model/api/api';
import { useNavigation } from '@react-navigation/native';



export const useViewModel = () => {
    const navigation=useNavigation()

    const access = useSelector(state => state.userdata.person)

    const HideItemsD = useDispatch()
    const name = useSelector(state => state.userdata.name)
    const classTitle = useSelector(state => state.filter.className)

    const HideItem = (id) => {
        HideItemsD(sethiddenitems(id))
    }

    const scheduleNotification = (item) => {
        const shdate = NotificationDateTime(item.item.fullDate)
        shdate != undefined && LR(shdate, item.item.Title)
    }

    const InsertTask = (Id) => {
        InsertTaskUsecase(Id, name, classTitle)
        HideItem(Id)
    }

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



