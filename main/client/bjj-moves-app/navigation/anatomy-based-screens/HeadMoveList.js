import * as react from 'react';
import { View, Text } from 'react-native';

export default function HeadMoveListScreen({navigation}) {
    return (
        <View style={{alignItems: "center", flex: 1, justifyContent: "center"}}>
            <Text
                onPress= {() => alert("Head Screen")} 
                style={{fontSize: 26, fontWeight: "bold"}}>Head Move List Screen</Text>
        </View>
    );
}