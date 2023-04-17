import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';


import { Text, View } from '../components/Themed';
import { ScrollView } from 'react-native';
import { ParallelSwitch } from '../components/ParallelSwitch'
import { ClassPicker } from '../components/classPicker'
import { useSelector, useDispatch } from 'react-redux';
import { setidentity, setaccess, setName } from '../redux/userdataSlice'
import * as Notifications from "expo-notifications";

export default function SettingsScreen() {

  const setidentityD = useDispatch()
  const setaccessD = useDispatch()
  const setNameD= useDispatch()
  const name= useSelector(state=>state.userdata.name)

  const DropAuth = () => {
    setidentityD(setidentity(false))
    setaccessD(setaccess(false))
  }

  return (

    <ScrollView >
      <View style={styles.container}>

        <View style={styles.paral}><Text style={styles.title}>Параллели</Text></View>
        <View style={styles.Parallelcontainer}>
          <View style={{ flexDirection: 'row', marginTop: 10, marginRight: 25, marginLeft: 25 }}>
            <ParallelSwitch label='11' />
            <ParallelSwitch label='10' />
            <ParallelSwitch label='9' />
            <ParallelSwitch label='8' />
          </View>

          <View style={{ flexDirection: 'row', marginTop: 10, marginRight: 25, marginLeft: 25 }}>
            <ParallelSwitch label='7' />
            <ParallelSwitch label='6' />
            <ParallelSwitch label='5' />
            <ParallelSwitch label='4' />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, marginRight: 25, marginLeft: 25 }}>

            <ParallelSwitch label='3' />
            <ParallelSwitch label='2' />
            <ParallelSwitch label='1' />
          </View>
        </View>
        <ClassPicker />
        <View style={styles.containerinicialize}><Text style={styles.inicialize}>Введите фамилию, имя</Text></View>
        <View style={{ ...styles.textinput, width: '80%' }}>
          <TextInput 
          onChangeText={(text)=>setNameD(setName(text))}
          style={styles.input}
          value={name}
          >

          </TextInput>
        </View>

        <TouchableOpacity
          style={styles.exitBtnContainer}
          onPress={DropAuth}
        >
          {/* <View style={styles.exitBtnContainer}> */}
          <Text style={styles.exitbtn}>Выйти из системы</Text>
          {/* </View> */}

        </TouchableOpacity>
      </View>
    </ScrollView >

  );
}


const styles = StyleSheet.create({
  exitbtn: {
    fontSize: 16,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#bee8ff',
    flexDirection: "column",
    flex: 1,
  },
  exitBtnContainer: {
    alignItems: 'center',
    flexDirection: "column",
    width: '40%',
    backgroundColor: '#ffffff',
    borderLeftColor: '#0A4563',
    borderLeftWidth: 3,
    borderRadius: 10,
    borderBottomColor: '#0A4563',
    borderBottomWidth: 3,
    borderRightColor: '#0A4563',
    borderRightWidth: 3,
    borderTopColor: '#0A4563',
    borderTopWidth: 3,
    justifyContent: 'center',
    // paddingBottom: 300

  },
  Parallelcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bee8ff',
    flexDirection: "column",
    width: '100%'

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    borderRadius: 25,
  },
  paral: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bee8ff',
  },
  textinput: {
    alignItems: 'center',
    width: 100,
    height: 40,
    margin: 10,
    backgroundColor: "#bee8ff",
    borderLeftColor: '#000000',
    borderLeftWidth: 1,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    borderRightColor: '#000000',
    borderRightWidth: 1,
    borderTopColor: '#000000',
    borderTopWidth: 1,
    justifyContent: "center",
    textAlign:"center",
    borderRadius: 5
  },
  // input: {
  //   margin: 15,
  // },
  inicialize: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerinicialize: {
    justifyContent: "center",
    // alignContent: "center",
    backgroundColor: "#bee8ff"
  }

});
