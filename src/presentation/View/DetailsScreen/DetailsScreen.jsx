import React from 'react'
import { StyleSheet, TouchableOpacity,Text, View  } from 'react-native';

// import * as Clipboard from 'expo-clipboard';
import Clipboard from '@react-native-clipboard/clipboard';

export default function DetailsScreen({route:{params}}) {
  const copyToClipboard =  (params) => {
    Clipboard.setString('asdasd');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>copyToClipboard(params)} style={styles.link}>
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
