import { StyleSheet, TouchableOpacity, FlatList, Text, View } from 'react-native';
import { useEffect, useState } from 'react';



import { ParallelSwitch } from '../components/ParallelSwitch'
import { ClassPicker } from '../components/classPicker'
import { useSelector, useDispatch } from 'react-redux';
import { setidentity, setaccess } from '../redux/userdataSlice'
import * as Notifications from "expo-notifications";
import { iteratorSymbol } from 'immer/dist/internal';

export default function NotificationScreen() {
  const [NotifList, SetNotifList] = useState()
  const getNotifications = async () => {

    const feedback = await Notifications.getAllScheduledNotificationsAsync()
    // console.log(feedback)
    SetNotifList(feedback)
  }

  useEffect(() => {


    getNotifications()



  }, [])

  const ClearNotifications = async () => {

    // await Notifications.dismissAllNotificationsAsync()
    await Notifications.cancelAllScheduledNotificationsAsync()
  }

  // ClearNotifications()

  const getDateString = (dateMills) => {
    const DateString = new Date(dateMills)
     return `${DateString.toLocaleDateString()} ${DateString.toLocaleTimeString()}`
 }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.exitBtnContainer}
        onPress={getNotifications}
      >
        <Text style={styles.exitbtn}>Показать все</Text>
      </TouchableOpacity>      
      <TouchableOpacity
        style={styles.exitBtnContainer}
        onPress={ClearNotifications}
      >
        <Text style={styles.exitbtn}>Удалить все уведомления</Text>
      </TouchableOpacity>
      <FlatList
        data={NotifList}
        renderItem={(item) => {
          // console.log(item.item)

          return (<Text>{`${getDateString(item.item.trigger.value)} ${item.item.content.body}`}</Text>)
        }}
        keyExtractor={(item) => item.id}
      />
    </View >
  );
}


const styles = StyleSheet.create({
  exitbtn: {
    fontSize: 16,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#9fdafc',
    flexDirection: "column",
    flex: 1,
  },
  exitBtnContainer: {
    alignItems: 'center',
    flexDirection: "column",
    width: '100%',
    backgroundColor: '#fbeec1',
    borderLeftColor: '#659DBD',
    borderLeftWidth: 3,
    borderRadius: 10,
    borderBottomColor: '#659DBD',
    borderBottomWidth: 3,
    borderRightColor: '#659DBD',
    borderRightWidth: 3,
    borderTopColor: '#659DBD',
    borderTopWidth: 3,
    justifyContent: 'center',
  },
  Parallelcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9fdafc',
    flexDirection: "column",
    width: '100%'

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    borderRadius: 25,
  },
  paral: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9fdafc',
  },
});
