import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export const Screen2 = () => {
    return (
        <View style={styles.screen2}>
            <View style={styles.teacher}>
                <Button style={styles.teach}
                    title="Учитель"
                    color='#DAAD86'>
                </Button>
            </View>
            <View style={styles.purple}>
                <Button
                    title="Ученик"
                    color = '#DAAD86'>
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen2: {
        flex: 1,
        backgroundColor: '#659DBD',
        justifyContent: 'center',
        flexDirection: "row",
    },
    teacher: {
        backgroundColor: '#659DBD',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

    },
    purple: {
        backgroundColor: '#659DBD',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

    },
})