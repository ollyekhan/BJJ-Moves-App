import * as react from 'react';
import { View, Text } from 'react-native';

export default function SettingsScreen({navigation}) {
    return (
        <View style={{alignItems: "center", flex: 1, justifyContent: "center"}}>
            <Text
                onPress= {() => navigation.navigate('DiagramsScreen')} 
                style={{fontSize: 26, fontWeight: "bold"}}>Settings Screen</Text>
        </View>
    );
}