import * as react from 'react';
import { View, Text } from 'react-native';

export default function LegsMoveListScreen({navigation}) {
    return (
        <View style={{alignItems: "center", flex: 1, justifyContent: "center"}}>
            <Text
                onPress= {() => alert("Legs Screen")} 
                style={{fontSize: 26, fontWeight: "bold"}}>Legs Move List Screen</Text>
        </View>
    );
}