import { StyleSheet } from 'react-native';


import { Text, View } from '../components/Themed';
import { ParallelSwitch } from '../components/ParallelSwitch'
import { ClassPicker } from '../components/classPicker'

export default function TabTwoScreen() {
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
