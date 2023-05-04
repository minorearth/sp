import { SafeAreaProvider } from 'react-native-safe-area-context';
import useViewModel from './ViewModel';
import Navigation from './presentation/navigation';
import { persistor } from './presentation/redux/store';
import store from './presentation/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { Text } from 'react-native'
import { Screen2 } from './presentation/View/onBoard/identity/Identity';
import {PinScreen} from './presentation/View/onBoard/PinScreen/PinScreen'

export default function App() {
  const isLoadingComplete = useViewModel();
  persistor.purge()

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
