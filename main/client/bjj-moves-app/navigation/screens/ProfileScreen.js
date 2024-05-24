import * as react from 'react';
import { View, Text } from 'react-native';

export default function ProfilesScreen({navigation}) {
    return (
        <View style={{alignItems: "center", flex: 1, justifyContent: "center"}}>
            <Text
                onPress= {() => alert("Profile Screen")} 
                style={{fontSize: 26, fontWeight: "bold"}}>Profile Screen</Text>
        </View>
    );
}