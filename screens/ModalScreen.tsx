import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, SafeAreaView, TextInput, Button, Alert } from 'react-native';
import { useState, useEffect } from 'react';

import { Text, View } from '../components/Themed';
import { useDispatch, useSelector } from 'react-redux'
import { setaccess, setauthpassed } from '../redux/userdataSlice'
import { setperson, setidentity } from "../redux/userdataSlice";



export default function ModalScreen() {

  const dispatch = useDispatch()

  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/RomanInformatika/schoolevents2/users",
      {
        method: 'GET',
        headers: { 'Content-Type': 'text/plain' }
      })
      .then(res => res.json())
      .then(
        (result) => {
          // console.log(result)
          setResponse(result);
          setIsLoading(false);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      )
  }, []);


  const [pinText, SetPinText] = useState('123456789')

  const onChangeText = (text) => {

    SetPinText(text)
  }



  // const setidentityD = useDispatch()


  const checkAccess = () => {

    for (const tt in response) {
      if (response[tt].code == pinText) {

        return dispatch(setaccess(true))
        // setidentityD(setidentity(true))
        // return 's'
      }
    }
    Alert.alert(
      "Ошибка",
      "Неверный PIN. Верный-123456789",
      [
              { text: "Ну и ладно :(" }
      ])

  }

  const identityPassed = useSelector(state => state.userdata.identityPassed)
  const accesspassed = useSelector(state => state.userdata.access)
  // console.log(identityPassed, accesspassed)
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
          <Button
            title="OK"
            color='#0A4563'
            onPress={() => checkAccess()}
          />
        </View>

        {/* <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} /> */}
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
    // flex:2,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '50%',
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
    backgroundColor: '#FBEEC1'
  },
});
// Тест слияния веток
