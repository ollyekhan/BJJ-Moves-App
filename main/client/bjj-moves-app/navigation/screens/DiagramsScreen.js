import * as react from 'react';
import { View, Text } from 'react-native';

export default function DiagramsScreen({navigation}) {
    return (
        <View style={{alignItems: "center", flex: 1, justifyContent: "center"}}>
            <Text
                onPress= {() => alert("Stahp! Get outta here!")} 
                style={{fontSize: 26, fontWeight: "bold"}}>Welcome to the Diagrams Screen</Text>
        </View>
    );
}