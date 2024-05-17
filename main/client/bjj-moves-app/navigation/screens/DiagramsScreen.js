import * as react from 'react';
import { View, Text } from 'react-native';

export default function DiagramsScreen({navigation}) {
    return (
        <View style={{alignItems: "center", flex: 1, justifyContent: "center"}}>
            <Text
                onPress= {() => alert("Yo what up")} 
                style={{fontSize: 26, fontWeight: "bold"}}>Welcome to the Diagrams Screen (start from 8:28 of video)</Text>
        </View>
    );
}