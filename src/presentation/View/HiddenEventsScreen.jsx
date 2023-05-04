import { StyleSheet, View  } from 'react-native';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { filterAll } from '../../utils/utils'
import { Events } from '../components/Events'

export default function HiddenEventsScreen({ navigation }) {
  const result = useSelector((state) => state.userdata.items)
  const HiddenItems = useSelector((state) => state.filter.hiddenItems)
  const [response, setResponse] = useState();
  const refreshItems = useSelector((state) => state.filter.refreshItems)

  useEffect(() => {
    const filter = { "className": "", "myClassToggle": false, "parallels": { "1": true, "10": true, "11": true, "2": true, "3": true, "4": true, "5": true, "6": true, "7": true, "8": true, "9": true }, "refreshItems": true, "value": "Все" }
    setResponse(filterAll(result, filter, "", 'Учитель', HiddenItems, true));

  }, [refreshItems]);


  return (
    <View style={styles.container}>
      <Events navigation={navigation} response={response} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",

  },
 
});