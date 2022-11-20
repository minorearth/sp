import React, { useState,useEffect } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { setperson, setidentity, setaccess } from "../redux/userdataSlice";

import { useSelector } from 'react-redux';
export const Screen2 = () => {
    useEffect(()=>{

        setidentityD(setidentity(false))
        setaccessD(setaccess(false))
        console.log('тута')

    },[])

    const identityPassed = useSelector(state => state.userdata.identityPassed)

    const setpersonD = useDispatch()
    const setidentityD = useDispatch()
    const setaccessD = useDispatch()

    const setIdentity = (person) => {
        if (person == 'Ученик') {
            setpersonD(setperson('Ученик'))
            setidentityD(setidentity(true))
            setaccessD(setaccess(true))
        } else{
            setpersonD(setperson('Учитель'))
            setidentityD(setidentity(true))
        }
    }
    if (!identityPassed) {
        return (
            <View style={styles.screen2}>
                <View style={styles.teacher}>
                    <Button style={styles.teach}
                        title="Учитель"
                        color='#DAAD86'
                        onPress={() => setIdentity('')}>
                    </Button>
                </View>
                <View style={styles.purple}>
                    <Button
                        title="Ученик"
                        color='#DAAD86'
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