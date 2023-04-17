import { StyleSheet, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';




export const GetTaskCompletedUserList = (props) => {
    const userName = props.route.params.new_taskscomlpeted
    return (<View style={styles.container}>
        <View style={styles.first}><Text style={styles.one}>Выполнившие задачу:</Text></View>
        <View style={styles.box}>{userName.map(item => (<View style={styles.maintext}><Text style={styles.text}>{item.username}</Text></View>))}</View>
    </View>)

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#bee8ff'
    },
    box: {
        marginTop: 30,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderLeftColor: '#0A4563',
        borderLeftWidth: 5,
        borderRightColor: '#0A4563',
        borderRightWidth: 5

    },
    text: {
        textAlign: "center"
    },
    one: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: 'bold',
    },
    first: {
        justifyContent: "center",
        marginTop: 13
    },
    maintext: {
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: 20,
        padding: 3,
        borderBottomColor: '#209fdf',
        borderBottomWidth: 3,

    }
});
