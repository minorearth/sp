import React from 'react'
import { StyleSheet, FlatList, ActivityIndicator, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { FilterBtn } from './filterBtn'



export const FilterBar = () => {
    const [FilterState, setFilterState] = useState('Сегодня')


    return (
        <ScrollView horizontal>
            <FilterBtn label='Сегодня' onClick={setFilterState}  filterState={FilterState}/>
            <FilterBtn label='Завтра' onClick={setFilterState}  filterState={FilterState}/>
            <FilterBtn label='Неделя' onClick={setFilterState}  filterState={FilterState}/>
            <FilterBtn label='Месяц' onClick={setFilterState}  filterState={FilterState}/>
            <FilterBtn label='Все' onClick={setFilterState}  filterState={FilterState}/>
            <FilterBtn label='Прошедшие' onClick={setFilterState}  filterState={FilterState}/>
        </ScrollView >


    )


}


const styles = StyleSheet.create(

    {

        filter1: {
            backgroundColor: '#bee8ff'
        },



    }

)