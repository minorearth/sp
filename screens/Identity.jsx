import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { setperson, setidentity, setaccess } from "../redux/userdataSlice";


import { useSelector } from 'react-redux';
export const Screen2 = () => {
    useEffect(() => {
        setidentityD(setidentity(false))
    }, [])

    const identityPassed = useSelector(state => state.userdata.identityPassed)
    const setpersonD = useDispatch()
    const setidentityD = useDispatch()
    const setaccessD = useDispatch()

    const setIdentity = (person) => {
        if (person == 'Ученик') {
            setpersonD(setperson('Ученик'))
            setidentityD(setidentity(true))
            setaccessD(setaccess(true))
        } else {
            setpersonD(setperson('Учитель'))
            setidentityD(setidentity(true))
        }
    }
    if (!identityPassed) {
        return (
            <View style={styles.screen2}>
                <View style={styles.teacher}>
                    <Button style={styles.teacher}
                        title="Учитель"
                        color='#6a99b3'
                        onPress={() => setIdentity('Учитель')}>
                    </Button>
                </View>
                <View style={styles.purple}>
                    <Button
                        title="Ученик"
                        color='#6a99b3'
                        onPress={() => setIdentity('Ученик')}>
                    </Button>
                </View>
            
            </View>

        )
    } else null
}

const styles = StyleSheet.create({
    screen2: {
        flex: 1,
        backgroundColor: '#93d8ff',
        justifyContent: 'center',
        flexDirection: "row",
    },
    teacher: {
        backgroundColor: '#17597E',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

    },
    purple: {
        backgroundColor: '#17597E',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

    },
})