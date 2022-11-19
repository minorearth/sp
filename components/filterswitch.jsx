import React, { useState } from "react";
import { View, Switch, StyleSheet,Text } from "react-native";

export const Filterswitch = (props) => {
    const { label } = props
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
        backgroundColor: '#659DBD',
        alignItems: "center",
        justifyContent: "flex-start",
        height:50,
    }
});