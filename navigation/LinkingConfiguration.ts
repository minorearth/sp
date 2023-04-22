import * as Linking from 'expo-linking';

const linking = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              EventsScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              SettingsScreen: 'two',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
