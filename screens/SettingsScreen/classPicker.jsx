import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setClassName } from '../../redux/filterSlice'

export const ClassPicker = () => {
    const setClassD = useDispatch()
    const [className, setClassNameh] = useState('')
    const classNameS = useSelector(state => state.filter.className)

    return (

        <View style={styles.container}>
            <Text style={styles.caption}>Выберите класс</Text>
            <Text style={{ fontStyle: 'italic' }}>Класс с буквой без пробела, например, 10Т. Буква кириллицей</Text>
            <TextInput style={styles.input}
                onChangeText={(text) => setClassD(setClassName(text))}
                value={classNameS}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        flexDirection: 'column',
        paddingTop: 5,
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#bee8ff',
        alignItems: 'center',
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',


    },
    input: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        width: '25%',
        fontSize: 18,
        borderRadius: 5,
        textAlign: 'center',
        backgroundColor: "#FFFFFF"
        
    },
});

