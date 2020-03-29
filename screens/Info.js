import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Folder from './Folder';

const Stack = createStackNavigator();

export default function Info({ name }) {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Folder" 
                component={Folder} 
                initialParams={{ name: "Realms" }} 
            />
        </Stack.Navigator>
    );
}