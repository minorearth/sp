import { StyleSheet, FlatList, ActivityIndicator, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
// import { Text,} from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useSelector } from 'react-redux';
import { ISOdateParse, filterAll } from '../utils'
import { FilterBtn } from '../components/filterBtn'


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();
  const selectFilter = useSelector((state) => state.filter.value)

  useEffect(() => {
    // console.log(selectFilter)
    // console.log(selectFilter)
    fetch("https://school1298.ru/cl/calendar.json",
      // fetch("https://api.coindesk.com/v1/bpi/currentprice.json",
      {
        method: 'GET',
        headers: { 'Content-Type': 'text/plain' }
      })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          // setResponse(result);
          setResponse(filterAll(result,selectFilter));
          setIsLoading(false);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      )
  }, [selectFilter]);



  return (

    <View style={styles.container}>
      <View style={styles.filter}>
        <ScrollView horizontal>
          <FilterBtn style={styles.filter1} label='Сегодня' />
          <FilterBtn label='Завтра' />
          <FilterBtn label='Неделя' />
          <FilterBtn label='Месяц' />
          <FilterBtn label='Все' />
          <FilterBtn label='Прошедшие' />
        </ScrollView>
      </View>
      <View style={styles.events}>
        {/* {getContent()} */}
        {/* {!isLoading && <Text style={styles.library}>{response.value[0].Address}</Text>} */}

        <FlatList
          data={response?.value}
          renderItem={(item) => {
            return <View style={styles.box}>
              <View style={styles.data1}><Text style={styles.data}>{item.item.Time} {ISOdateParse(item.item.DateStart)}</Text></View>
              <View style={styles.two}>
              <View style={styles.who1}><Text style={styles.who}>{item.item.MainMan.Title}</Text></View>
              <View style={styles.where1}><Text style={styles.where}>{item.item.Address}</Text><View /></View>
              </View>
              <View style={styles.what1}><Text style={styles.what}>{item.item.Group[0].Title}</Text></View>

            </View>
          }}
          keyExtractor={(item) => item.id}
          vertical
        />


        <StatusBar style="auto" />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "flex-start",
    // justifyContent: "flex-start",
    flexDirection: "column",
    borderLeftColor: '#DAAD86',
    borderLeftWidth: 3,
  },
  events: {

    backgroundColor: '#659DBD',
    justifyContent: "flex-start"
  },

  box: {

    backgroundColor: '#FBEEC1',
    borderRadius: 10,
    margin:5,
    padding: 5,
  },

  filter: {
    backgroundColor: 'white'
  },


  filterbtn: {
    borderRadius: 5,
    backgroundColor: '#787878',
    margin: 5,
    padding: 5
  },


  what: {
    fontSize: 14,
  },
  where: {
    fontSize: 12,
  },
  who: {
    fontSize: 13,
  },
  data: {
    fontSize: 12,
    fontStyle: 'italic',

  },
  what1: {
    flex: 1,
    alignItems: 'flex-start',
    // marginTop: 10,
    fontWeight: 'bold',
  },
  where1: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: 5,
  },
  who1: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: 5,
  },
  data1: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: 5,
  },
  filter1: {
    backgroundColor: '#B5B8B1'
  },
  two: {
    flexDirection: "row",
  },
});