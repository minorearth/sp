
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';
import { GetTaskCompletedUserList } from '../screens/ScreenEventHistory';
import { useSelector } from 'react-redux';
import {BottomTabNavigator} from './bottomtabs'

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const identityPassed = useSelector(state => state.userdata.identityPassed)
  const accesspassed = useSelector(state => state.userdata.access)
  if (identityPassed && accesspassed) {
    return (<NavigationContainer
    >
      <Stack.Navigator>
        <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Описание мероприятия!' }} />
        <Stack.Screen name="ScreenEventHistory" component={GetTaskCompletedUserList} options={{ title: 'История выполнения задачи!' }} />
      </Stack.Navigator>
    </NavigationContainer>

    );
  } else return null
}


