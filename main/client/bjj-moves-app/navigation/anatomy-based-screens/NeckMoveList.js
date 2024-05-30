import * as react from 'react';
import { View, Text } from 'react-native';

export default function NeckMoveListScreen({navigation}) {
    return (
        <View style={{alignItems: "center", flex: 1, justifyContent: "center"}}>
            <Text
                onPress= {() => alert("Neck Screen")} 
                style={{fontSize: 26, fontWeight: "bold"}}>Neck Move List Screen</Text>
        </View>
    );
}