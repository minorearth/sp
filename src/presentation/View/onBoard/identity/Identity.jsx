
import React from "react";
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
                        name="username2"
                        color='#6a99b3'
                        onPress={() => vm.setUserIdentity('Учитель')}
                        testID="test:id/teacherRole"
                        >
                    </Button>
                </View>
                <View style={styles.purple} data-testid="submit2" >
                    <Button
                        title="Ученик"
                        name="username" 
                        ref={()=>"123456"}
                        color='#6a99b3'
                        onPress={() => vm.setUserIdentity('Ученик')}
                        data-testid="submit"
                        testID="test:id/studentRole"
                        
                        >
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