import React, { useState, useEffect } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { setParallels } from "../redux/filterSlice"
import AsyncStorage from '@react-native-async-storage/async-storage';



export const ParallelSwitch = (props) => {
    const { label } = props
    const [isEnabled, setIsEnabled] = useState(false);   
    const [Loading, isLoading] = useState(true);
    const setParallelD = useDispatch()
    var loading=true

    const getSetting= async ()=>{
        // const aaa=await AsyncStorage.getItem('@parallel'+label)
        // setIsEnabled(aaa=='true')
        // console.log(aaa)
    }


    useEffect(() => {
        getSetting()
    }, [])

    useEffect(() => {

        setParallelD(setParallels({[label]: isEnabled}))

    }, [isEnabled])
    const toggleSwitch = () => {
        // AsyncStorage.setItem('@parallel'+label, String(!isEnabled))
        setIsEnabled(previousState => !previousState)
    
    };

    return (
        <View style={styles.container}>
            <Text>{label}</Text>
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
        backgroundColor: '#8888FF',
        alignItems: "center",
        justifyContent: "flex-start",
        height: 50,
    }
});