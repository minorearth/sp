import { View, StyleSheet } from 'react-native';
import { ParallelSwitch } from './ParallelSwitch'


export const ParallelsBar = () => {
    return (
        <View style={styles.parallelcontainer}>
            <View style={styles.parallelRow}>
                <ParallelSwitch label='11' />
                <ParallelSwitch label='10' />
                <ParallelSwitch label='9' />
                <ParallelSwitch label='8' />
            </View>
            <View style={styles.parallelRow}>
                <ParallelSwitch label='7' />
                <ParallelSwitch label='6' />
                <ParallelSwitch label='5' />
                <ParallelSwitch label='4' />
            </View>
            <View style={{ ...styles.parallelRow, marginBottom: 10 }}>
                <ParallelSwitch label='3' />
                <ParallelSwitch label='2' />
                <ParallelSwitch label='1' />
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    parallelRow: {
        flexDirection: 'row',
        marginTop: 10,
        marginRight: 25,
        marginLeft: 25
    },

    parallelcontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bee8ff',
        flexDirection: "column",
        width: '100%'
    },


});
