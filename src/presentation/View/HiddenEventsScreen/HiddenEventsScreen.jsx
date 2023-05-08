import { StyleSheet, View } from 'react-native';
import { Events } from '../../components/Events'
import { useViewModel } from './ViewModel';

export default function HiddenEventsScreen() {
  const vm = useViewModel()
  return (
    <View style={styles.container}>
      <Events response={vm.response} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",

  },

});