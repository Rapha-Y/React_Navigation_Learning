import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

export default function Auth({ navigation }) {
    const [id, setId] = useState('');

    return(
        <View style={{
            flex: 1, 
            flexDirection: "row", 
            alignItems: "center", 
            justifyContent: "center"
        }}>
            <TextInput
                style={{
                    borderWidth: 1,
                    borderRightWidth: 0, 
                    width: 250,
                    height: 50,
                    paddingLeft: 10
                }}
                onChangeText={text => setId(text)}
                id={id}
                placeholder="Identifier"
            />
            <TouchableOpacity
                style={{
                    borderWidth: 1, 
                    width: 50,
                    height: 50,
                    backgroundColor: "pink", 
                    alignItems: "center",
                    justifyContent: "center"
                }}
                onPress={() => navigation.navigate("Main", {id: id})}
            >
                <Text>Enter</Text>
            </TouchableOpacity>
        </View>
    );
}