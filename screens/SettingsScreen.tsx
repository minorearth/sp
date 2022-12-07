import { StyleSheet, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';


import { Text, View } from '../components/Themed';
import { ParallelSwitch } from '../components/ParallelSwitch'
import { ClassPicker } from '../components/classPicker'
import { useSelector, useDispatch } from 'react-redux';
import { setidentity, setaccess } from '../redux/userdataSlice'
import * as Notifications from "expo-notifications";

export default function SettingsScreen() {

  const setidentityD = useDispatch()
  const setaccessD = useDispatch()

  const DropAuth = () => {
    setidentityD(setidentity(false))
    setaccessD(setaccess(false))
  }

  return (
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
          <ParallelSwitch label='7' />
          <ParallelSwitch label='5' />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, marginRight: 25, marginLeft: 25 }}>
          <ParallelSwitch label='4' />
          <ParallelSwitch label='3' />
          <ParallelSwitch label='2' />
          <ParallelSwitch label='1' />
        </View>
      </View>
      <ClassPicker />
      <TouchableOpacity
        style={styles.exitBtnContainer}
        onPress={DropAuth}
      >
        {/* <View style={styles.exitBtnContainer}> */}
        <Text style={styles.exitbtn}>Выйти из системы</Text>
        {/* </View> */}

      </TouchableOpacity>

    </View >
  );
}


const styles = StyleSheet.create({
  exitbtn: {
    fontSize: 16,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#9fdafc',
    flexDirection: "column",
    flex: 1,
  },
  exitBtnContainer: {
    alignItems: 'center',
    flexDirection: "column",
    width: '100%',
    backgroundColor: '#fbeec1',
    borderLeftColor: '#659DBD',
    borderLeftWidth: 3,
    borderRadius: 10,
    borderBottomColor: '#659DBD',
    borderBottomWidth: 3,
    borderRightColor: '#659DBD',
    borderRightWidth: 3,
    borderTopColor: '#659DBD',
    borderTopWidth: 3,
    justifyContent: 'center',
  },
  Parallelcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9fdafc',
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
    backgroundColor: '#9fdafc',
  },
});
