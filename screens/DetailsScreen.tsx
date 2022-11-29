import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import * as Clipboard from 'expo-clipboard';

export default function DetailsScreen({route}) {
  // const { params}=route.params
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync('hello world');
  };
  // console.log(route.params)

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={copyToClipboard} style={styles.link}>
        <Text style={styles.linkText}>Копировать текст</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{route.params}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
