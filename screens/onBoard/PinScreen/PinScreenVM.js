
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setaccess, setidentity } from '../../../redux/userdataSlice'
import { checkPin } from '../../../api/api';
import { Alert } from 'react-native';

export const usePinScreen = () => {
    const setAccessD = useDispatch()
    const setidentityD = useDispatch()
    const identityPassed = useSelector(state => state.userdata.identityPassed)
    const accesspassed = useSelector(state => state.userdata.access)

    const [pinText, SetPinText] = useState('')
    const onChangeText = (text) => {
        SetPinText(text)
    }

    const checkAccess = async () => {
        const resp = await checkPin(pinText)
        if (resp['new_eventsusers'].length != 0) {
            return setAccessD(setaccess(true))
        }
        Alert.alert(
            "Ошибка",
            "Неверный PIN",
            [
                { text: "Ну и ладно :(" }
            ])
    }

    const returnBack = () => {
        setidentityD(setidentity(false))
    }

    return {
        identityPassed,
        accesspassed,
        pinText,
        returnBack,
        onChangeText,
        checkAccess
    }
}