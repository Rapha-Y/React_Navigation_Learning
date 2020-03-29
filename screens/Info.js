import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Folder from './Folder';
import Monster from './Monster';

const Stack = createStackNavigator();

export default function Info({ name }) {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Folder" 
                component={Folder} 
                initialParams={{ name: "Realms" }} 
            />
            <Stack.Screen
                name="Monster"
                component={Monster}
            />
        </Stack.Navigator>
    );
}