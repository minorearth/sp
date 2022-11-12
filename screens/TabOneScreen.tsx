import { StyleSheet,FlatList, ActivityIndicator,Text,View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
// import { Text,} from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useSelector } from 'react-redux';
import{ISOdateParse,filterByToday} from '../utils'

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();

  useEffect(() => {
    fetch("https://school1298.ru/cl/calendar.json",
      // fetch("https://api.coindesk.com/v1/bpi/currentprice.json",
      {
        method: 'GET',
        headers: { 'Content-Type': 'text/plain' }
      })
      .then(res => res.json())
      .then(
        (result) => {
          // console.log(result)
          setResponse(filterByToday(result));
          setIsLoading(false);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      )
  }, []);

  

  return (
    // <View style={styles.container}>
    <View style={styles.container}>
      {/* {getContent()} */}
      {!isLoading && <Text style={styles.library}>{response.value[0].Address}</Text>}
      
      <FlatList
        data={response?.value}
        renderItem={(item) => {
          return <View style={styles.box}>
            <View style={styles.what1}><Text style={styles.what}>{item.item.Group[0].Title}</Text></View>
            <View style={styles.where1}><Text style={styles.where}>{item.item.Address}</Text><View/></View>
            <View style={styles.who1}><Text style={styles.who}>{item.item.MainMan.Title}</Text></View>
            <View style={styles.data1}><Text style={styles.data}>{ISOdateParse(item.item.DateStart)}, {item.item.Time}</Text></View>

            <Text>  </Text>
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