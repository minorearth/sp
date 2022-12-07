import { StyleSheet, FlatList, ActivityIndicator, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';

// import { Text,} from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useSelector } from 'react-redux';
import { ISOdateParse, filterAll, FormatParallel, FormatClass,DataClean } from '../utils'
import { ClassSwitch } from '../components/classwitch'
import { FilterBar } from '../components/filterBar'
import { Event } from '../components/Event'

import Notification, { schedulePushNotification } from '../notification'


export default function EventsScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const HiddenItems=useSelector(state=>state.userdata.hiddenItems)
  console.log(HiddenItems)

  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [result, setResult] = useState();
  let [response, setResponse] = useState();
  const selectFilter = useSelector((state) => state.filter)
  const refreshItems = useSelector((state) => state.filter.refreshItems)
  const access = useSelector(state => state.userdata.person)

  useEffect(() => {
    fetch("https://school1298.ru/cl/teachers/calendar.json",
      // fetch("https://school1298.ru/cl/calendar.json",
      // fetch("https://api.coindesk.com/v1/bpi/currentprice.json",
      {
        method: 'GET',
        headers: { 'Content-Type': 'text/plain' }
      })
      .then(res => res.json())
      .then(
        (result) => {
          setResult(DataClean(result));
          // setResponse(filterAll(result, selectFilter, access));
          setIsLoading(false);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      )
  }, []);


  useEffect(() => {

    setResponse(filterAll(result, selectFilter, access,HiddenItems));


  }, [selectFilter,refreshItems]);



  return (

    <View style={styles.container}>
      <View style={styles.filter}>
        <FilterBar />
        <ClassSwitch />
      </View>

      <View style={styles.events}>
        <FlatList
          data={response?.value}
          renderItem={(item) => <Event navigation={navigation} item={item} />}
          keyExtractor={(item) => item.ID}
          vertical
          refreshing={true}
        />
        <Notification />


        <StatusBar style="auto" />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#0A4563',

  },
  events: {

      backgroundColor: '#0A4563',
      justifyContent: "flex-start"
  },

  box: {
      backgroundColor: '#bee8ff',
      borderRadius: 10,
      margin: 10,
      padding: 5,
      borderLeftColor: '#ffffff',
      borderLeftWidth: 5,
      borderRightColor: '#ffffff',
      borderRightWidth: 5,


  },

  filter: {
      backgroundColor: '#bee8ff',
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
      borderBottomColor: '#0A4563',
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
      borderLeftColor: '#ffffff',
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
      borderLeftColor: '#0A4563',
      borderLeftWidth: 3,
      borderRadius: 20,
      borderBottomColor: '#0A4563',
      borderBottomWidth: 3,
      borderRightColor: '#0A4563',
      borderRightWidth: 3,
      borderTopColor: '#0A4563',
      borderTopWidth: 3,
      backgroundColor: '#ffffff'

  }
});