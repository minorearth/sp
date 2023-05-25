import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useViewModel } from './ViewModel';
import { AlertDialog } from '../alert';

export const Event = ({ item: { item }}) => {
    const vm = useViewModel()
    return (<View style={!item.showToKids ? { ...styles.box, backgroundColor: '#8397fb' } : { ...styles.box }}>
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <FontAwesome name="eye-slash" size={24} color="black" onPress={() => { AlertDialog(() => vm.HideItem(item.Id), 'removetask') }} />
                {vm.access != 'Учитель' && <FontAwesome name="send" size={24} color="black" onPress={() => AlertDialog(() => vm.InsertTask(item.Id), 'inserttask')} />}
            </View>
            <View>
                <View style={styles.data1}>
                    <Text style={styles.data}>{item.Period}</Text>
                </View>
                <View style={styles.where1} >
                    <Text style={styles.where}>{item.Address}</Text>
                </View >
            </View>
        </View>
        <TouchableOpacity onPress={() => vm.NavigateToDetails(item.Description2, item.Description) }>
            <View style={styles.what1}><Text style={styles.what}>{item.Title}</Text></View>
        </TouchableOpacity>
        <View style={styles.line}>
            <View style={styles.who2}><Text style={styles.parallel}>{item.Parallels}</Text></View>
            <View style={styles.who3}><Text style={styles.class}>{item.Classes + item.Id}</Text></View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5, }}>
            {vm.access == 'Учитель' && <TouchableOpacity onPress={() => vm.NavigateToHist(item.Id)}>
                <FontAwesome name="list-alt" size={24} color="black" />
            </TouchableOpacity >}

            <View style={styles.borderline}>
                <Text style={styles.who}>{item.Mainman}</Text>
            </View>

        </View>

    </View>)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",

    },
    events: {

        backgroundColor: '#0A4563',
        justifyContent: "flex-start"
    },

    box: {
        backgroundColor: '#bee8ff',
        borderRadius: 10,
        margin: 10,
        padding: 5,
        borderLeftColor: '#ffffff',
        borderLeftWidth: 5,
        borderRightColor: '#ffffff',
        borderRightWidth: 5,


    },

    filter: {
        backgroundColor: '#bee8ff',
    },
    filterbtn: {
        borderRadius: 5,
        backgroundColor: '#787878',
        margin: 5,
        padding: 5
    },

    what: {
        fontSize: 18,
    },
    where: {
        fontSize: 14,
        fontStyle: 'italic',
        marginRight: 5,
    },
    who: {
        fontSize: 15,
        fontStyle: 'italic',
        marginRight: 5,
        marginLeft: 5,
        alignSelf: "flex-end"
    },
    data: {
        fontSize: 13,
        fontStyle: 'italic',
        marginRight: 5,
    },
    what1: {
        flex: 1,
        alignItems: 'flex-start',
        fontWeight: 'bold',
        borderBottomColor: '#0A4563',
        borderBottomWidth: 3,
        borderRadius: 10,
        borderStyle: 'dotted',
    },
    where1: {
        flex: 1,
        alignItems: 'flex-end',
        marginTop: 5,
    },
    data1: {
        flex: 1,
        alignItems: 'flex-end',
        marginTop: 5,
    },
    filter1: {
        backgroundColor: '#B5B8B1'
    },
    two: {
        flexDirection: "row",
    },
    line: {
        borderLeftColor: '#ffffff',
        borderLeftWidth: 3,
        borderStyle: 'solid',
        marginLeft: 15,
        borderRadius: 10,
        marginTop: 7,
    },
    who2: {
        marginLeft: 5,
        fontSize: 7,
    },
    who3: {
        marginLeft: 5,
        fontSize: 7,
    },
    parallel: {
        fontSize: 14,
    },
    class: {
        fontSize: 14,
    },
    borderline: {
        borderLeftColor: '#0A4563',
        borderLeftWidth: 3,
        borderRadius: 20,
        borderBottomColor: '#0A4563',
        borderBottomWidth: 3,
        borderRightColor: '#0A4563',
        borderRightWidth: 3,
        borderTopColor: '#0A4563',
        borderTopWidth: 3,
        backgroundColor: '#ffffff'

    }
});