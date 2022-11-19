import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";



export const Splashscreen = () => {
    return (<View style={styles.splashscreen}>
        <Text style={styles.splashtext}>Добрый день</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    splashscreen: {
        flex: 1,
        backgroundColor: '#BC986A',
        justifyContent: 'center',
        alignItems: 'center'
    },
    splashtext: {
        fontSize: 25,
        
    },
})