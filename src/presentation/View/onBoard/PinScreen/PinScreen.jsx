import { StyleSheet, TextInput, Button,  Text, View } from 'react-native';
import { usePinScreen } from './PinScreenVM';

export const PinScreen = () => {
  const PinScreen = usePinScreen()


  if (PinScreen.identityPassed && !PinScreen.accesspassed) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Введите PIN-код</Text>
        <TextInput
          style={styles.input}
          onChangeText={PinScreen.onChangeText}
          value={PinScreen.pinText}
        />
        <View style={styles.fixToText}>
          <View style={{ padding: 5, backgroundColor: '#bee8ff' }}>
            <Button
              title="OK"
              color='#0A4563'
              onPress={() => PinScreen.checkAccess()}
            />
          </View>
          <View style={{ padding: 5, backgroundColor: '#bee8ff' }}>
            <Button
              title="Назад"
              color='#0A4563'
              onPress={() => { PinScreen.returnBack() }}
            />
          </View>
        </View>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bee8ff',
    width: '100%'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '40%',
    borderRadius: 5,
    textAlign: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  fixToText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBEEC1',
  },
});
