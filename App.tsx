import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { persistor } from './redux/store';
import store from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Text } from 'react-native';
import { Splashscreen } from './components/splashscreen';
import { Screen2 } from './components/screen2';


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (<Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
      <SafeAreaProvider>
        {false && <Splashscreen />}
        {false && <Screen2/>}


        {true && <Navigation colorScheme={colorScheme} />}
        <StatusBar />
      </SafeAreaProvider>
    </PersistGate>
    </Provider >
    );
  }
}
