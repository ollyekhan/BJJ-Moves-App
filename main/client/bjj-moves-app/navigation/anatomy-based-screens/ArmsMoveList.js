import * as react from 'react';
import { View, Text } from 'react-native';

export default function ArmsMoveListScreen({navigation}) {
    return (
        <View style={{alignItems: "center", flex: 1, justifyContent: "center"}}>
            <Text
                onPress= {() => alert("Arms Screen")} 
                style={{fontSize: 26, fontWeight: "bold"}}>Arms Move List Screen</Text>
        </View>
    );
}