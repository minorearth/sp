import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import * as Clipboard from 'expo-clipboard';

export default function DetailsScreen({ navigation }) {
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync('hello world');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={copyToClipboard} style={styles.link}>
        <Text style={styles.linkText}>Копировать текст</Text>
      </TouchableOpacity>
      <Text style={styles.title}>По нашим сведениям, в ваших образовательных организациях отсутствуют ИТ-полигоны и Робоклассы. Предлагаем воспользоваться возможностями лабораторий предпрофессионального образования и посетить с учениками 7-ых классов IT-вертикали учебный день, который проведут специалисты Городского методического центра.</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
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
