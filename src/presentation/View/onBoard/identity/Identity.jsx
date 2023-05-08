
import { View, StyleSheet, Button } from "react-native";
import {useViewModel} from './ViewModel'

export const Indentity = () => {
    const vm=useViewModel()
    if (!vm.identityPassed) {
        return (
            <View style={styles.screen2}>
                <View style={styles.teacher}>
                    <Button style={styles.teacher}
                        title="Учитель"
                        color='#6a99b3'
                        onPress={() => vm.setUserIdentity('Учитель')}>
                    </Button>
                </View>
                <View style={styles.purple}>
                    <Button
                        title="Ученик"
                        color='#6a99b3'
                        onPress={() => vm.setUserIdentity('Ученик')}>
                    </Button>
                </View>
            
            </View>

        )
    } else null
}

const styles = StyleSheet.create({
    screen2: {
        flex: 1,
        backgroundColor: '#93d8ff',
        justifyContent: 'center',
        flexDirection: "row",
    },
    teacher: {
        backgroundColor: '#17597E',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

    },
    purple: {
        backgroundColor: '#17597E',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

    },
})