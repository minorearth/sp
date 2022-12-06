import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setfilter } from '../redux/filterSlice';
// import 



export const FilterBtn = (props) => {
    const { onClick } = props
    const { filterState } = props

    const setFilterD = useDispatch()
    const setFilter = () => {

        setFilterD(setfilter(label))
        onClick(label)


    }
   

    useEffect(() => {

        if (filterState == label) {
            // console.log('hello')


        }


    }, [filterState])

    const { label } = props

    return (<View style={filterState == label?styles.buttonPressed:styles.button}><TouchableOpacity
        onPress={setFilter}
    ><Text style={styles.filterbtn}>{label}</Text>
    </TouchableOpacity></View>



    )



}


const styles = StyleSheet.create({

    button: {
        borderRadius: 5,
        backgroundColor: '#ffffff',
        padding: 5,
        marginLeft: 4,
        borderLeftColor: '#0A4563',
        borderLeftWidth: 3,
        borderRadius: 20,
        borderBottomColor: '#0A4563',
        borderBottomWidth: 3,
        borderRightColor: '#0A4563',
        borderRightWidth: 3,
        borderTopColor: '#0A4563',
        borderTopWidth: 3,
        backgroundColor: '#ffffff',
        marginBottom: 4,
        marginTop: 4,

    },    buttonPressed: {
        borderRadius: 5,
        backgroundColor: '#ffffff',
        padding: 5,
        marginLeft: 4,
        borderLeftColor: '#0A4563',
        borderLeftWidth: 3,
        borderRadius: 20,
        borderBottomColor: '#0A4563',
        borderBottomWidth: 3,
        borderRightColor: '#0A4563',
        borderRightWidth: 3,
        borderTopColor: '#0A4563',
        borderTopWidth: 3,
        backgroundColor: '#317294',
        marginBottom: 4,
        marginTop: 4,

    },

});