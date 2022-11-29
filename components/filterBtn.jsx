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
        backgroundColor: '#BC986A',
        padding: 5,
        marginLeft: 4,
        borderLeftColor: '#f2bf57',
        borderLeftWidth: 3,
        borderRadius: 20,
        borderBottomColor: '#f2bf57',
        borderBottomWidth: 3,
        borderRightColor: '#f2bf57',
        borderRightWidth: 3,
        borderTopColor: '#f2bf57',
        borderTopWidth: 3,
        backgroundColor: '#FBEEC1',
        marginBottom: 4,
        marginTop: 4,

    },    buttonPressed: {
        borderRadius: 5,
        backgroundColor: '#BC986A',
        padding: 5,
        marginLeft: 4,
        borderLeftColor: '#f2bf57',
        borderLeftWidth: 3,
        borderRadius: 20,
        borderBottomColor: '#f2bf57',
        borderBottomWidth: 3,
        borderRightColor: '#f2bf57',
        borderRightWidth: 3,
        borderTopColor: '#f2bf57',
        borderTopWidth: 3,
        backgroundColor: '#8f7409',
        marginBottom: 4,
        marginTop: 4,

    },

});