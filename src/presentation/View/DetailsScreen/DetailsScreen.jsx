import { StyleSheet, TouchableOpacity,Text, View  } from 'react-native';

import * as Clipboard from 'expo-clipboard';

export default function DetailsScreen({route:{params}}) {
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(params);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={copyToClipboard} style={styles.link}>
        <Text style={styles.linkText}>Копировать текст</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{params}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#a1c4d6'
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
    color: '#0a4563',
  },
});
