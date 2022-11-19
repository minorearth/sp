import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Splashscreen } from './components/splashscreen';
import { Screen2 } from './components/screen2';


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (<Provider store={store}>
      <SafeAreaProvider>
        {false && <Splashscreen />}
        {true && <Screen2/>}


        {false && <Navigation colorScheme={colorScheme} />}
        <StatusBar />
      </SafeAreaProvider>
    </Provider>
    );
  }
}
