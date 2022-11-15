import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setfilter } from '../redux/filterSlice'
// import 



export const FilterBtn = (props) => {

    const setFilterD = useDispatch()

    // const [filter, setFilter] = useState()
    // useEffect(() => {
        
    //     console.log(label)


    // }, [filter])
    const { label } = props

    return (<TouchableOpacity
        onPress={() => setFilterD(setfilter(label))}
    ><Text style={styles.filterbtn}>{label}</Text>
    </TouchableOpacity>



    )



}


const styles = StyleSheet.create({

    filterbtn: {
        borderRadius: 5,
        backgroundColor: '#B5B8B1',
        margin: 5,
        padding: 5
    },

});