import React, { useState } from 'react';
import { View, Image } from 'react-native';

function getUrl(name) {
    switch(name) {
        case "Loli Ruri":
            return "http://file5.ratemyserver.net/mobs/1505.gif";
        case "Disguise":
            return "http://file5.ratemyserver.net/mobs/1506.gif";
        case "Wraith":
            return "http://file5.ratemyserver.net/mobs/1475.gif";
        case "Evil Druid":
            return "http://file5.ratemyserver.net/mobs/1435.gif";
        case "Dark Priest":
            return "http://file5.ratemyserver.net/mobs/2283.gif";
        case "Scorpion":
            return "http://file5.ratemyserver.net/mobs/1001.gif";
        case "Metaller":
            return "http://file5.ratemyserver.net/mobs/1058.gif";
        case "Sohee":
            return "http://file5.ratemyserver.net/mobs/1170.gif";
        case "Munak":
            return "http://file5.ratemyserver.net/mobs/1610.gif";
        case "Bongun":
            return "http://file5.ratemyserver.net/mobs/1611.gif";
        case "Harpy":
            return "http://file5.ratemyserver.net/mobs/1376.gif";
        case "Goat":
            return "http://file5.ratemyserver.net/mobs/1372.gif";
        case "Grand Peco":
            return "http://file5.ratemyserver.net/mobs/1369.gif";
        case "Metaling":
            return "http://file5.ratemyserver.net/mobs/1613.gif";
        case "Porcellio":
            return "http://file5.ratemyserver.net/mobs/1619.gif";
        case "Siroma":
            return "http://file5.ratemyserver.net/mobs/1776.gif";
        case "Kobold":
            return "http://file5.ratemyserver.net/mobs/2284.gif";
        case "Magmaring":
            return "http://file5.ratemyserver.net/mobs/1836.gif";
        case "Andre":
            return "http://file5.ratemyserver.net/mobs/1095.gif";
        case "Piere":
            return "http://file5.ratemyserver.net/mobs/1160.gif";
        case "Deniro":
            return "http://file5.ratemyserver.net/mobs/1239.gif";
        default:
            return "http://file5.ratemyserver.net/mobs/1973.gif";
    }
}

export default function Monster({ route }) {
    const [url, setUrl] = useState(getUrl(route.params.name));

    return(
        <View style={{flex: 1, width: "50%", marginLeft: "25%"}}>
            <Image style={{flex: 1, width: null, height: null, resizeMode: "contain"}} source={{uri: url}}/>
        </View>
    );
}