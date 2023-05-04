import { Alert } from 'react-native';

const messages = {
    inserttask: {
        title: 'Информирование о выполнении',
        msg: 'Проинформировать о выполнении и скрыть?'
    },
    removetask: {
        title: 'Скрыть мероприятие',
        msg: 'Мероприятие будет скрыто. Вы сможете увидеть его в скрытых мероприятиях. Скрыть?'
    }
}


export const AlertDialog = (action,message) => {
    Alert.alert(messages[message].title, messages[message].msg,
        [
            {
                text: "Да",
                onPress: action,
            }, {
                text: "Нет",
                onPress: () => { },
            }
        ], { cancelable: true, })

}