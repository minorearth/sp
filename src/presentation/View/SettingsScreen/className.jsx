import { View, StyleSheet, Text, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setClassName } from '../../../../src/presentation/redux/filterSlice'

export const ClassPicker = () => {
    const setClassD = useDispatch()
    const classNameS = useSelector(state => state.filter.className)

    return (
        <View style={styles.container}>
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

