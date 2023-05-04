import React, { useState, useEffect } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { toggleMyclass } from '../../../redux/filterSlice'


export const ClassSwitch = () => {
    const toggleSwitchD=useDispatch()
    const isEnabled=useSelector(state=>state.filter.myClassToggle)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>  Мой класс</Text>
            <Switch
                trackColor={{ false: "#0A4563", true: "#AAAAAA" }}
                thumbColor={isEnabled ? "#ffffff" : "#ffffff"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={()=>toggleSwitchD(toggleMyclass(!isEnabled))}
                value={isEnabled}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#bee8ff',
        alignItems: "center",
        justifyContent: "flex-start",
        height: 50,
    },
    text: {
        fontSize: 16,
    }
});