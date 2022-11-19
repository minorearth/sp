import React, { useState,useEffect } from "react";
import { View, Switch, StyleSheet,Text } from "react-native";
import { useDispatch } from "react-redux";
import {toggleMyclass} from '../redux/filterSlice'


export const ClassSwitch = (props) => {
    const { label } = props
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitchD=useDispatch()
    useEffect(()=>{
        // console.log(isEnabled)
        toggleSwitchD(toggleMyclass(isEnabled))
    },[isEnabled])

    return (
        <View style={styles.container}>
            <Text>Мой класс</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
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
        // backgroundColor: '#8888FF',
        alignItems: "center",
        justifyContent: "flex-start",
        height:50,
    }
});