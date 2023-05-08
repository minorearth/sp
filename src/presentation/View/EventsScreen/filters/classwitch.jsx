import { View, Switch, StyleSheet, Text } from "react-native";

export const ClassSwitch = ({classSwitchEnabled, onClassSwitchPress}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>  Мой класс</Text>
            <Switch
                trackColor={{ false: "#0A4563", true: "#AAAAAA" }}
                thumbColor={classSwitchEnabled ? "#ffffff" : "#ffffff"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={()=>onClassSwitchPress(classSwitchEnabled)}
                value={classSwitchEnabled}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#bee8ff',
        alignItems: "center",
        justifyContent: "flex-start",
        height: 50,
    },
    text: {
        fontSize: 16,
    }
});