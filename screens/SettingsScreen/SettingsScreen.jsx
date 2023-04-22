import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { ClassPicker } from './className.jsx'
import { useDispatch } from 'react-redux';
import { setidentity, setaccess } from '../../redux/userdataSlice'
import { ParallelsBar } from './Parallels/ParellelsBar'
import { UserName } from './userName.jsx';

export default function SettingsScreen() {
  const setidentityD = useDispatch()
  const setaccessD = useDispatch()

  const DropAuth = () => {
    setidentityD(setidentity(false))
    setaccessD(setaccess(false))
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.exitBtnContainer}
        onPress={DropAuth}
      >
        <Text style={styles.exitbtn}>Выйти</Text>
      </TouchableOpacity>

      <Text style={styles.inicialize}>Введите фамилию, имя</Text>
      <UserName />

      <Text style={styles.inicialize}>Выберите класс</Text>
      <Text style={{ fontStyle: 'italic' }}>Класс с буквой без пробела, например, 10Т. Буква кириллицей</Text>
      <ClassPicker />
      
      <Text style={styles.inicialize}>Параллели</Text>
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
