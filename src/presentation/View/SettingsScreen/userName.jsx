import { StyleSheet, TextInput, } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { setName } from '../../redux/userdataSlice'

export const UserName = () => {
    const setNameD = useDispatch()
    const name = useSelector(state => state.userdata.name)

    return (
        <TextInput style={styles.textinput}
            onChangeText={(text) => setNameD(setName(text))}
            value={name}
        >
        </TextInput>
    )

}


const styles = StyleSheet.create({
    textinput: {
        width: '80%',
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
