import { StyleSheet, FlatList, ActivityIndicator, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';

// import { Text,} from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useSelector } from 'react-redux';
import { ISOdateParse, filterAll, FormatParallel,FormatClass } from '../utils'
import { FilterBtn } from '../components/filterBtn'
import {ClassSwitch} from '../components/classwitch'
import {FilterBar} from '../components/filterBar'


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
      
         <FilterBar/>

        <ClassSwitch/>
      </View>

      <View style={styles.events}>
        {/* {getContent()} */}
        {/* {!isLoading && <Text style={styles.library}>{response.value[0].Address}</Text>} */}

        <FlatList
          data={response?.value}
          renderItem={(item) => {
            return <View style={styles.box}>
              <View style={styles.data1}><Text style={styles.data}> {item.item.Time} {ISOdateParse(item.item.DateStart)}</Text></View>
              <View style={styles.where1}><Text style={styles.where}>{item.item.Address}</Text></View>
              <View style={styles.what1}><Text style={styles.what}>{item.item.Title}</Text></View>
              <View style={styles.line}>
              <View style={styles.who2}><Text style={styles.parallel}>{FormatParallel(item.item.Parallel)}</Text></View>
              <View style={styles.who3}><Text style={styles.class}>{FormatClass(item.item.Class)}</Text></View>
              </View>
              <View style={styles.who1}><View style={styles.borderline}><Text style={styles.who}>{item.item.MainMan.Title}</Text></View></View>

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

  },
  events: {

    backgroundColor: '#659DBD',
    justifyContent: "flex-start"
  },

  box: {
    backgroundColor: '#9fdafc',
    borderRadius: 10,
    margin: 5,
    padding: 5,
    borderLeftColor: '#FBEEC1',
    borderLeftWidth: 5,
    borderRightColor: '#FBEEC1',
    borderRightWidth: 5,

  },

  filter: {
    backgroundColor: '#c4eaff',
  },


  filterbtn: {
    borderRadius: 5,
    backgroundColor: '#787878',
    margin: 5,
    padding: 5
  },


  what: {
    fontSize: 18,
  },
  where: {
    fontSize: 14,
    fontStyle: 'italic',
    marginRight: 5,
  },
  who: {
    fontSize: 15,
    fontStyle: 'italic',
    marginRight: 5,
    marginLeft: 5,
  },
  data: {
    fontSize: 13,
    fontStyle: 'italic',
    marginRight: 5,

  },
  what1: {
    flex: 1,
    alignItems: 'flex-start',
    // marginTop: 10,
    fontWeight: 'bold',
    borderBottomColor: '#fad8bb',
    borderBottomWidth: 3,
    borderRadius: 10,
    borderStyle: 'dotted',
  },
  where1: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: 5,
  },
  who1: {
    flex: 1,
    alignItems: 'flex-end',
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
  line: {
    borderLeftColor: '#FBEEC1',
    borderLeftWidth: 3,
    borderStyle: 'solid',
    marginLeft: 15,
    borderRadius: 10,
    marginTop: 7,
  },
  who2: {
    marginLeft: 5,
    fontSize: 7,
  },
  who3: {
    marginLeft: 5,
    fontSize: 7,
  },
  parallel: {
    fontSize: 14,
  },
  class: {
    fontSize: 14,
  },
  borderline: {
    borderLeftColor: '#f2bf57',
    borderLeftWidth: 3,
    borderRadius: 20,
    borderBottomColor: '#f2bf57',
    borderBottomWidth: 3,
    borderRightColor: '#f2bf57',
    borderRightWidth: 3,
    borderTopColor: '#f2bf57',
    borderTopWidth: 3,
    backgroundColor: '#FBEEC1'

  }
});