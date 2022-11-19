import { StyleSheet, FlatList, ActivityIndicator, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';

// import { Text,} from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useSelector } from 'react-redux';
import { ISOdateParse, filterAll, FormatParallel,FormatClass } from '../utils'
import { FilterBtn } from '../components/filterBtn'
import {ClassSwitch} from '../components/classwitch'


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();
  const selectFilter = useSelector((state) => state.filter)

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
          // setResponse(result);
          setResponse(filterAll(result, selectFilter));
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
        <ClassSwitch/>
      </View>

      <View style={styles.events}>
        {/* {getContent()} */}
        {/* {!isLoading && <Text style={styles.library}>{response.value[0].Address}</Text>} */}

        <FlatList
          data={response?.value}
          renderItem={(item) => {
            return <View style={styles.box}>
              <View style={styles.what1}><Text style={styles.what}>{item.item.Title}</Text></View>
              <View style={styles.where1}><Text style={styles.where}>{item.item.Address}</Text><View /></View>
              <View style={styles.who1}><Text style={styles.who}>{item.item.MainMan.Title}</Text></View>
              <View style={styles.who1}><Text style={styles.who}>{FormatParallel(item.item.Parallel)}</Text></View>
              <View style={styles.who1}><Text style={styles.who}>{FormatClass(item.item.Class)}</Text></View>
              <View style={styles.data1}><Text style={styles.data}>{ISOdateParse(item.item.DateStart)}, {item.item.Time}</Text></View>

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
    flexDirection: "column"
  },
  events: {

    backgroundColor: '#8D8741',
    justifyContent: "flex-start"
  },

  box: {

    backgroundColor: '#FBEEC1',
    borderRadius: 10,
    margin: 5,
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
    fontSize: 12,
  },
  data: {
    fontSize: 12,
  },
  what1: {
    flex: 1,
    alignItems: 'center',
    // marginTop: 10,
    fontWeight: 'bold',
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
  filter1: {
    backgroundColor: '#B5B8B1'
  }
});