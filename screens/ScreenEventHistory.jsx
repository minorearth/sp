import { StyleSheet, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';




export const GetTaskCompletedUserList = (props) => {
    const userName = props.route.params.new_taskscomlpeted
    return (<View style={styles.container}>
        {userName.map(item => (<Text>{item.username}</Text>))}
    </View>)

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#0A4563'
    },
});
