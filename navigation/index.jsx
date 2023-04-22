import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';
import EventsScreen from '../screens/EventsScreen/EventsScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import HiddenEventsScreen from '../screens/HiddenEventsScreen';
import { GetTaskCompletedUserList } from '../screens/ScreenEventHistory';
import LinkingConfiguration from './LinkingConfiguration';
import { useDispatch, useSelector } from 'react-redux';

export default function Navigation() {
  const identityPassed = useSelector(state => state.userdata.identityPassed)
  const accesspassed = useSelector(state => state.userdata.access)

  if (identityPassed && accesspassed) {
    return (<NavigationContainer
      linking={LinkingConfiguration}
      >
      <RootNavigator />
    </NavigationContainer>

    );
  } else return null
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Описание мероприятия!' }} />
      <Stack.Screen name="ScreenEventHistory" component={GetTaskCompletedUserList} options={{ title: 'История выполнения задачи!' }} />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      >
      <BottomTab.Screen
        name="TabOne"
        component={EventsScreen}
        options={({ navigation }) => ({
          title: 'Мероприятия',
          tabBarLabel: () => { return null },
          tabBarIcon: () => <TabBarIcon name="window-restore"  />,

        })}
      />
      <BottomTab.Screen
        name="HiddenEventsScreen"
        component={HiddenEventsScreen}
        options={{
          title: 'Скрытые мероприятия',
          tabBarLabel: () => { return null },
          tabBarIcon: () => <TabBarIcon name="eye-slash" />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={SettingsScreen}
        options={{
          title: 'Настройки',
          tabBarLabel: () => { return null },
          tabBarIcon: () => <TabBarIcon name="gears" />,
        }}
      />
      {/* <BottomTab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          title: 'Уведомления',
          tabBarLabel: () => { return null },
          tabBarIcon: ({ color }) => <TabBarIcon name="clock-o" color={color} />,
        }}
      />       */}
    </BottomTab.Navigator>
  );
}
//

function TabBarIcon(props) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
