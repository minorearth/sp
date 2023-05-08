
import { Event } from './Event/Event'
import Notification from '../View/NotificationScreen/notification'
import { View, FlatList,StyleSheet } from 'react-native'


export const Events = ({response}) => {
    return (
        <View style={styles.events}>
            <FlatList
                data={response}
                renderItem={(item) => <Event item={item} />}
                keyExtractor={(item) => item.ID}
                vertical
                refreshing={true}
                contentContainerStyle={{ paddingBottom: 200 }}
            />
            <Notification />
        </View>)

}

const styles = StyleSheet.create({
    events: {
      backgroundColor: '#0A4563',
      justifyContent: "flex-start",
      flex:1
    },
  });