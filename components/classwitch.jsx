import React, { useState,useEffect } from "react";
import { View, Switch, StyleSheet,Text } from "react-native";
import { useDispatch } from "react-redux";
import {toggleMyclass,setrefreshItems} from '../redux/filterSlice'


export const ClassSwitch = (props) => {
    const { label } = props
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitchD=useDispatch()
    const RefreshItemsD=useDispatch()
    useEffect(()=>{
        toggleSwitchD(toggleMyclass(isEnabled))
        RefreshItemsD(setrefreshItems())
    },[isEnabled])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>  Мой класс</Text>
            <Switch
                trackColor={{ false: "#0A4563", true: "#AAAAAA" }}
                thumbColor={isEnabled ? "#ffffff" : "#ffffff"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // flex: 1,
        backgroundColor: '#bee8ff',
        alignItems: "center",
        justifyContent: "flex-start",
        height: 50,
    },
    text: {
        fontSize: 16,
    }
});