import { StyleSheet, TextInput, } from 'react-native';

export const Input = ({name, setUserName,width}) => {
    return (
        <TextInput style={{...styles.textinput, width: width}}
            onChangeText={(text) => setUserName(text)}
            value={name}
        >
        </TextInput>
    )

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
