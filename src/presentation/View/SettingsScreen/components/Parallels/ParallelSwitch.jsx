import { View, Switch, StyleSheet, Text } from "react-native";
import { useViewModel } from "../../ViewModel";

export const ParallelSwitch = ({ label } ) => {
    const vm=useViewModel(label)

    return (
        <View style={styles.container}>
            <Text>{label}</Text>
            <View style={styles.switch}>
                <Switch
                    trackColor={{ false: "#767577", true: "#0A4563" }}
                    thumbColor={vm.isEnabled ? "#FFFFFF" : "#FFFFFF"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>vm.setParallel(label)}
                    value={vm.isEnabled}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#bee8ff',
        alignItems: "center",
        justifyContent: "flex-start",
        height: 50,
        flex:1
    },
    switch: {
        flex: 1,
        marginBottom: 15,
        marginRight: 20,
    },

});