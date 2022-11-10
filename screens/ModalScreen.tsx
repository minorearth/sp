import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, SafeAreaView, TextInput, Button } from 'react-native';
import { useState, useEffect } from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {  useDispatch } from 'react-redux'
import { setaccess} from '../redux/userdataSlice'




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
          console.log(result)
          setResponse(result);
          setIsLoading(false);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      )
  }, []);


  const [pinText, SetPinText] = useState('')

  const onChangeText = (text) => {

    SetPinText(text)
  }

  const checkAccess = () => {

    for (const tt in response) {
      if (response[tt].code==pinText){
        // console.log('granted')
        dispatch(setaccess('granted'))

        // return 's'
      } else
      {
      // console.log('denied')
      dispatch(setaccess('denied'))}


    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Введите PIN-код</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={pinText}
        />
        <View style={styles.fixToText}>
          <Button
            title="OK"
            onPress={() => checkAccess()}
          />
        </View>
      </SafeAreaView>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8888FF'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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
    backgroundColor: '#8888FF'
  },
});
