import React, { useState, useEffect } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setParallels, setrefreshItems } from "../../../redux/filterSlice"

export const ParallelSwitch = ({ label } ) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const setParallelD = useDispatch()
    const switchState = useSelector(state => state.filter.parallels)

    useEffect(() => {
        setIsEnabled(switchState[label] == true)
    }, [])

    useEffect(() => {
        setParallelD(setParallels({ [label]: isEnabled }))
    }, [isEnabled])


    const RefreshItemsD = useDispatch()
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        RefreshItemsD(setrefreshItems())
    };

    return (
        <View style={styles.container}>
            <Text>{label}</Text>
            <View style={styles.switch}>
                <Switch
                    trackColor={{ false: "#767577", true: "#0A4563" }}
                    thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#bee8ff',
        alignItems: "center",
        justifyContent: "flex-start",
        height: 50,
        flex:1
    },
    switch: {
        flex: 1,
        marginBottom: 15,
        marginRight: 20,
    },

});