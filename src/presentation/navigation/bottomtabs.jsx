import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EventsScreen from '../View/EventsScreen/EventsScreen';
import {SettingsScreen} from '../View/SettingsScreen/SettingsScreen';
import HiddenEventsScreen from '../View/HiddenEventsScreen/HiddenEventsScreen';

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="TabOne"
        >
            <BottomTab.Screen
                name="EventsTab"

                component={EventsScreen}
                

                options={({ navigation }) => ({
                    title: 'Мероприятия',
                    tabBarLabel: () => { return null },
                    tabBarIcon: () => <TabBarIcon name="window-restore" testID="test:id/eventsTab"/>,

                })}
            />
            <BottomTab.Screen
                name="HiddenEventsScreen"
                

                component={HiddenEventsScreen}
                options={{
                    title: 'Скрытые мероприятия',
                    tabBarLabel: () => { return null },
                    tabBarIcon: () => <TabBarIcon name="eye-slash" testID="test:id/hidden"/>,
                }}
            />
            <BottomTab.Screen
                name="SettingsTab"
                component={SettingsScreen}
                
                options={{
                    title: 'Настройки',
                    tabBarLabel: () => { return null },
                    tabBarIcon: () => <TabBarIcon name="gears" testID="test:id/settings"/>,
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
