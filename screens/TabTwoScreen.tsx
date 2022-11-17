import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Filterswitch } from '../components/filterswitch'
import { ClassPicker } from '../components/classPicker'

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Параллели</Text>
      <View style={styles.Parallelcontainer}>
        <View style={{ flexDirection: 'row' }}>
          <Filterswitch label='11' />
          <Filterswitch label='10' />
          <Filterswitch label='9' />
          <Filterswitch label='8' />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Filterswitch label='7' />
          <Filterswitch label='6' />
          <Filterswitch label='7' />
          <Filterswitch label='5' />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Filterswitch label='4' />
          <Filterswitch label='3' />
          <Filterswitch label='2' />
          <Filterswitch label='1' />
        </View>
      </View>
      <ClassPicker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#8888FF',
    flexDirection: "column"
  }, 
  Parallelcontainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#8888FF',
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
