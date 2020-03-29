import React from 'react';
import { View, Text } from 'react-native';

export default function Main({ route }) {
    const { id } = route.params;
    return(
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>{id}</Text>
        </View>
    );
}