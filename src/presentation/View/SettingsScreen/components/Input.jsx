import React from 'react';
import { StyleSheet, TextInput, } from 'react-native';
import PropTypes from 'prop-types';


export const Input = ({name, setUserName,width}) => {
    return (
        <TextInput style={{...styles.textinput, width: width} }
            onChangeText={(text) => setUserName(text)}
            value={name}
            testID="userName"
        >
        </TextInput>
    )

}

Input.propTypes={
    name: PropTypes.string,
    setUserName: PropTypes.func,
    width: PropTypes.string
}

const styles = StyleSheet.create({
    textinput: {
        fontSize: 18,
        backgroundColor: "#FFFFFF",
        height: 40,
        margin: 10,
        borderColor: '#000000',
        borderWidth: 1,
        textAlign: "center",
        borderRadius: 5
    },
});
