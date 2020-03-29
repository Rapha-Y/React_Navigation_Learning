import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import folders from '../data/folders';

function getFolder(name) {
    return (folders.filter((item) => {
        return item.name == name;
    }))[0];
}

function getSubfolders(name) {
    return getFolder(name).subfolders;
}

function getMonsters(name) {
    return getFolder(name).monsters;
}

export default function Folder({ navigation, route }) {
    const [subfolders, setSubfolders] = useState(getSubfolders(route.params.name));
    const [monsters, setMonsters] = useState(getMonsters(route.params.name));

    return(
        <View>
            <FlatList 
                data={subfolders}
                renderItem={({ item }) => 
                    <TouchableOpacity
                        style={{backgroundColor: "dodgerblue", borderWidth: 1, padding: 10, marginBottom: 5}}
                        onPress={() => navigation.push("Folder", {name: item})}
                    >
                        <Text style={{color: "white"}}>{item}</Text>
                    </TouchableOpacity>
                }
                keyExtractor={item => item}
            />
            <FlatList
                data={monsters}
                renderItem={({ item }) => 
                    <TouchableOpacity
                        style={{backgroundColor: "red", borderWidth: 1, padding: 10, marginBottom: 5}}
                        onPress={() => {navigation.navigate("Monster", {name: item})}}
                    >
                        <Text style={{color: "white"}}>{item}</Text>
                    </TouchableOpacity>
                }
                keyExtractor={item => item}
            />
        </View>
    );
}