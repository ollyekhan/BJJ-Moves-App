import * as react from 'react';
import { View, Text } from 'react-native';

export default function CommunityScreen({navigation}) {
    return (
        <View style={{alignItems: "center", flex: 1, justifyContent: "center"}}>
            <Text
                onPress= {() => alert("Community Screen")} 
                style={{fontSize: 26, fontWeight: "bold"}}>Community Screen</Text>
        </View>
    );
}