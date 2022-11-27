import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function DetailsScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>По нашим сведениям, в ваших образовательных организациях отсутствуют ИТ-полигоны и Робоклассы. Предлагаем воспользоваться возможностями лабораторий предпрофессионального образования и посетить с учениками 7-ых классов IT-вертикали учебный день, который проведут специалисты Городского методического центра.</Text>
      {/* <TouchableOpacity onPress={() =>{}} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!66</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
