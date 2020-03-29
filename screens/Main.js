import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import User from './User';

function firstTab() {
    return(
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>First</Text>
        </View>
    );
}

function secondTab() {
    return(
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>Second</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function Main({ route }) {
    const { id } = route.params;
    return(
        <Tab.Navigator>
            <Tab.Screen name="First" component={firstTab} />
            <Tab.Screen name="Second" component={secondTab} />
            <Tab.Screen name="User">
                {props => <User {...props} id={id} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}