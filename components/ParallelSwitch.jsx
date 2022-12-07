import React, { useState, useEffect } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setParallels } from "../redux/filterSlice"

// crap

export const ParallelSwitch = (props) => {
    const { label } = props
    const [isEnabled, setIsEnabled] = useState(false);   

    const setParallelD = useDispatch()
    const switchState = useSelector(state=>state.filter.parallels)

    useEffect(() => {
        setIsEnabled(switchState[label]==true)
    }, [])

    useEffect(() => {
        setParallelD(setParallels({[label]: isEnabled}))

    }, [isEnabled])

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
    
    };

    return (
        <View style={styles.container}>
            <View style={styles.label}><Text>{label}</Text></View>
            <View style={styles.switch}><Switch
                trackColor={{ false: "#767577", true: "#d678f5" }}
                thumbColor={isEnabled ? "#f7eba3" : "#f5abf5"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            /></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        // flex: 1,
        backgroundColor: '#bee8ff',
        alignItems: "center",
        justifyContent: "center",
        height: 50,
    },
    switch: {
        flex: 1,
        marginBottom: 15,
        marginRight: 20,
        // backgroundColor: '#bee8ff'
    },
    label: {
        flex: 1,
        // backgroundColor: '#bee8ff'
    }
});