import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';



export const FilterBtn = ({ onPeriodFilterPressed, PeriodFilterState, label }) => {
    return (
        <View style={PeriodFilterState == label ? styles.buttonPressed : styles.button}>
            <TouchableOpacity onPress={() => onPeriodFilterPressed(label)}>
                <Text style={styles.filterbtn}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        backgroundColor: '#ffffff',
        padding: 5,
        marginLeft: 4,
        borderColor: '#0A4563',
        borderLeftWidth: 3,
        borderRadius: 20,
        borderWidth: 3,
        backgroundColor: '#ffffff',
        marginBottom: 4,
        marginTop: 4,

    }, buttonPressed: {
        borderRadius: 5,
        backgroundColor: '#ffffff',
        padding: 5,
        marginLeft: 4,
        borderColor: '#0A4563',
        borderLeftWidth: 3,
        borderRadius: 20,
        borderBottomWidth: 3,
        borderRightWidth: 3,
        borderTopWidth: 3,
        backgroundColor: '#317294',
        marginBottom: 4,
        marginTop: 4,

    },

});