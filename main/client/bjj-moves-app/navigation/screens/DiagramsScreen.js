import * as react from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default function DiagramsScreen({navigation}) {
    return (
        <View style={{alignItems: "center", flex: 1, justifyContent: "center"}}>
            <Image source={require('../anatomy-photos/Head.jpg')} style = {styles.image} resizeMode="contain" />
            <Image source={require('../anatomy-photos/Neck.png')} style = {styles.image} resizeMode="contain" />

            <View style={styles.container}>
                <Image source={require('../anatomy-photos/LeftArm.png')} style = {styles.image} resizeMode="contain" />
                <Image source={require('../anatomy-photos/Torso.png')} style = {styles.image} resizeMode="contain" />
                <Image source={require('../anatomy-photos/RightArm.png')} style = {styles.image} resizeMode="contain" />
            </View>

            <View style={styles.container}>
                <Image source={require('../anatomy-photos/LeftLeg.png')} style = {styles.image} resizeMode="contain" />
                <Image source={require('../anatomy-photos/RightLeg.png')} style = {styles.image} resizeMode="contain" />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: Dimensions.get('window').width * 0.2,
        borderWidth: 2,
        borderHeight: 2,
        borderColor: 'black',
        margin: 10,
    }
})