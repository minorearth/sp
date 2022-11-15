import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {FlatList } from 'react-native';
import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View style={styles.container}>
      {/* {getContent()} */}
      {/* {!isLoading && <Text style={styles.library}>{response.value[0].Address}</Text>} */}
      
      <FlatList
        data={response?.value}
        renderItem={(item) => {
          return <View style={styles.box}>
            <View style={styles.what1}><Text style={styles.what}>{item.item.Group[0].Title}</Text></View>
            <View style={styles.where1}><Text style={styles.where}>{item.item.Address}</Text><View/></View>
            <View style={styles.who1}><Text style={styles.who}>{item.item.MainMan.Title}</Text></View>
            <View style={styles.data1}><Text style={styles.data}>{item.item.DateStart}, {item.item.Time}</Text></View>

            <Text>   </Text>
            <Text>   </Text>
          </View>
        }}
        keyExtractor={(item) => item.id}
        vertical
      />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    backgroundColor: '#8888FF'
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#8888FF'
  },
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    backgroundColor: '#CC66FF',
    borderRadius: 20,
    marginTop: 20
  },
  what: {
    fontSize: 18,
  },
  where: {
    fontSize: 18,
  },
  who: {
    fontSize: 18,
  },
  data: {
    fontSize: 18,
  },
  library: {
    fontSize: 25,
    borderRadius: 10,
  },
  what1: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10
  },
  where1: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10
  },
  who1: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10
  },
  data1: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10
  },
});