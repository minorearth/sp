import { Platform, StyleSheet, SafeAreaView, TextInput, Button, Alert,Text, View  } from 'react-native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setaccess, setauthpassed,setidentity } from '../../redux/userdataSlice'

export const checkPin = async (pin) => {
  var myHeaders = new Headers();
  myHeaders.append("X-Hasura-Role", "anonymous");
  myHeaders.append("content-type", "application/json");
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  const response = await fetch(`https://inform250.school1298.ru/api/rest/checkpin?pin=${encodeURIComponent(pin)}`, requestOptions).then(
    response => response.json())
  return response
}

export default function PinScreen() {
  const dispatch = useDispatch()
  const [pinText, SetPinText] = useState('')
  const onChangeText = (text) => {
    SetPinText(text)
  }
  const checkAccess = async () => {
    const resp = await checkPin(pinText)
    if (resp['new_eventsusers'].length != 0) {
      return dispatch(setaccess(true))
    }
    Alert.alert(
      "Ошибка",
      "Неверный PIN",
      [
        { text: "Ну и ладно :(" }
      ])
  }

  const identityPassed = useSelector(state => state.userdata.identityPassed)
  const accesspassed = useSelector(state => state.userdata.access)
  const setidentityD = useDispatch()

  if (identityPassed && !accesspassed) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Введите PIN-код</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={pinText}
        />
        <View style={styles.fixToText}>
          <View style={{padding:5,backgroundColor: '#bee8ff'}}>
          <Button
            title="OK"
            color='#0A4563'
            // width={100}
            onPress={() => checkAccess()}
          />          
          </View>
          <View style={{padding:5,backgroundColor: '#bee8ff'}}>
          <Button
            title="Назад"
            color='#0A4563'
            onPress={() => {setidentityD(setidentity(false))}}
          
          />
          </View>


        </View>
      </View>
    );
  } else return null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bee8ff',
    width: '100%'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '40%',
    borderRadius:5,
    textAlign:"center"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  fixToText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBEEC1',
  },
});
