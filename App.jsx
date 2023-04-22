import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { persistor } from './redux/store';
import store from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { Text } from 'react-native'
import { Screen2 } from './screens/onBoard/identity/Identity';
import {PinScreen} from './screens/onBoard/PinScreen/PinScreen'

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (<Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <SafeAreaProvider>
          <Screen2 />
          <PinScreen/>
          <Navigation/>
        </SafeAreaProvider>
      </PersistGate>
    </Provider >
    );
  }
}
