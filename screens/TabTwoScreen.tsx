import { StyleSheet, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';


import { Text, View } from '../components/Themed';
import { ParallelSwitch } from '../components/ParallelSwitch'
import { ClassPicker } from '../components/classPicker'
import { useSelector, useDispatch } from 'react-redux';
import { setidentity, setaccess } from '../redux/userdataSlice'

export default function TabTwoScreen() {

  const setidentityD = useDispatch()
  const setaccessD = useDispatch()

  const DropAuth = () => {
    setidentityD(setidentity(false))
    setaccessD(setaccess(false))
  }



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Параллели</Text>
      <View style={styles.Parallelcontainer}>
        <View style={{ flexDirection: 'row' }}>
          <ParallelSwitch label='11' />
          <ParallelSwitch label='10' />
          <ParallelSwitch label='9' />
          <ParallelSwitch label='8' />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <ParallelSwitch label='7' />
          <ParallelSwitch label='6' />
          <ParallelSwitch label='7' />
          <ParallelSwitch label='5' />
        </View>
        <View style={{ flexDirection: 'row' }}>
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
    </View>
  );
}


const styles = StyleSheet.create({
  exitbtn: {
    borderRadius: 5,
    backgroundColor: '#BC986A',
    margin: 5,
    padding: 5
  },
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#659DBD',
    flexDirection: "column"
  },
  exitBtnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#659DBD',
    flexDirection: "column",
    width: '100%'
  },
  Parallelcontainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#659DBD',
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
});
