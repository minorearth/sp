import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useSelector } from 'react-redux';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const count = useSelector((state) => state.userdata.value)

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Tab One</Text>
      <Text style={styles.title}>{count}</Text>
      <View style={styles.separator}></View>
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#8888FF'
  },
});
