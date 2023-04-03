import { StyleSheet, TouchableOpacity, FlatList, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import * as Notifications from "expo-notifications";
import {getDateString} from '../utils'
import { NotificationRequest } from 'expo-notifications';

export default function NotificationScreen() {
  const [NotifList, SetNotifList] = useState()
  
  const getNotifications = async () => {
    const feedback = await Notifications.getAllScheduledNotificationsAsync()
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
    backgroundColor: '#bee8ff',
    flexDirection: "column",
    flex: 1,
  },
  exitBtnContainer: {
    alignItems: 'center',
    flexDirection: "column",
    width: '55%',
    backgroundColor: '#ffffff',
    borderLeftColor: '#0A4563',
    borderLeftWidth: 3,
    borderRadius: 10,
    borderBottomColor: '#0A4563',
    borderBottomWidth: 3,
    borderRightColor: '#0A4563',
    borderRightWidth: 3,
    borderTopColor: '#0A4563',
    borderTopWidth: 3,
    justifyContent: 'center',
    margin: 5,
  },
  Parallelcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bee8ff',
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
     backgroundColor: '#bee8ff',
  },
});
