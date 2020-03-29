import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import User from './User';
import Info from './Info';

const Tab = createBottomTabNavigator();

export default function Main({ route }) {
    const { id } = route.params;
    return(
        <Tab.Navigator>
            <Tab.Screen name="User">
                {props => <User {...props} id={id} />}
            </Tab.Screen>
            <Tab.Screen name="Info" component={Info} />
        </Tab.Navigator>
    );
}