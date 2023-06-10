import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { ParallelsBar } from './components/Parallels/ParellelsBar.jsx'
import { Input } from './components/Input.jsx';
import { useViewModel } from './ViewModel.jsx';

export function SettingsScreen() {
  const vm = useViewModel()
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.exitBtnContainer}
        onPress={vm.DropAuth}
      >
        <Text style={styles.exitbtn} testID='test:id/logout'>Выйти</Text>
      </TouchableOpacity>
      <Text style={styles.inicialize}>Введите фамилию, имя</Text>
      <Input name={vm.name} setUserName={vm.setUserName} width='80%'  testId='test:id/userName'/>
      <Text style={styles.inicialize}>Выберите класс</Text>
      <Text style={{ fontStyle: 'italic' }}>Класс с буквой без пробела, например, 10Т. Буква кириллицей</Text>
      <Input name={vm.className} setUserName={vm.setClass} width='20%' testId='test:id/className'/>
      <Text style={styles.inicialize}>Параллrели</Text>
      <ParallelsBar></ParallelsBar>
    </View>
  );
}


const styles = StyleSheet.create({
  exitbtn: {
    fontSize: 16,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#bee8ff',
    flexDirection: "column",
    flex: 1,
  },
  exitBtnContainer: {
    backgroundColor: '#ffffff',
    borderColor: '#0A4563',
    borderRadius: 10,
    borderWidth: 3,
    padding: 7,
    margin: 3,
    alignSelf: 'flex-end'
  },

  inicialize: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 'bold',
  },


});
