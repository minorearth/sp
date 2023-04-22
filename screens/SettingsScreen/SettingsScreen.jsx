import { StyleSheet, TextInput, TouchableOpacity,Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { ParallelSwitch } from './ParallelSwitch'
import { ClassPicker } from './classPicker'
import { useSelector, useDispatch } from 'react-redux';
import { setidentity, setaccess, setName } from '../../redux/userdataSlice'

export default function SettingsScreen() {
  const setidentityD = useDispatch()
  const setaccessD = useDispatch()
  const setNameD = useDispatch()
  const name = useSelector(state => state.userdata.name)
  const DropAuth = () => {
    setidentityD(setidentity(false))
    setaccessD(setaccess(false))
  }

  return (

    // <ScrollView >
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.exitBtnContainer}
        onPress={DropAuth}
      >
        <Text style={styles.exitbtn}>Выйти</Text>
      </TouchableOpacity>

      <View style={styles.containerinicialize}><Text style={styles.inicialize}>Введите фамилию, имя</Text></View>
      <TextInput style={styles.textinput }
        onChangeText={(text) => setNameD(setName(text))}
        // style={styles.input}
        value={name}
      >
      </TextInput>
      <ClassPicker />
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

    </View>
    // </ScrollView >

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
    alignItems: 'flex-end',
    flexDirection: "column",
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
    padding: 3,
    margin: 3,
    alignSelf: 'flex-end'
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
    width: '80%',
    fontSize: 18,
    backgroundColor: "#FFFFFF",
    height: 40,
    margin: 10,
    borderColor: '#000000',
    borderWidth: 1,
    textAlign: "center",
    borderRadius: 5
  },
  inicialize: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerinicialize: {
    justifyContent: "center",
    backgroundColor: "#bee8ff"
  }

});
