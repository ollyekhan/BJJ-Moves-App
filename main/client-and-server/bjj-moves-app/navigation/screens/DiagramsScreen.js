import * as react from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';

const headMoveListName = "Head Move List";
const neckMoveListName = "Neck Move List";
const armsMoveListName = "Arms Move List";
const legsMoveListName = "Legs Move List";

function DiagramsScreen({navigation}) {
    return (
        <View style={styles.parentContainer}>
            <TouchableOpacity onPress={() => navigation.navigate(headMoveListName)}>
                <Image source={require('../anatomy-photos/Head.jpg')} style = {styles.imageHead} resizeMode="contain" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate(neckMoveListName)}>
                <Image source={require('../anatomy-photos/NeckResized.png')} style = {styles.imageNeck} resizeMode="contain" />
            </TouchableOpacity>
            

            <View style={styles.imageContainer}>
                <TouchableOpacity onPress={() => navigation.navigate(armsMoveListName)}>
                    <Image source={require('../anatomy-photos/LeftArmResized.png')} style = {styles.imageLeftArm} resizeMode="contain" />
                </TouchableOpacity>
                <Image source={require('../anatomy-photos/Torso.png')} style = {styles.imageTorso} resizeMode="contain" />
                <TouchableOpacity onPress={() => navigation.navigate(armsMoveListName)}>
                    <Image source={require('../anatomy-photos/RightArm.png')} style = {styles.imageRightArm} resizeMode="contain" />
                </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
                <TouchableOpacity onPress={() => navigation.navigate(legsMoveListName)}> 
                    <Image source={require('../anatomy-photos/LeftLeg.png')} style = {styles.imageLeftLeg} resizeMode="contain" />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate(legsMoveListName)}>
                    <Image source={require('../anatomy-photos/RightLeg.png')} style = {styles.imageRightLeg} resizeMode="contain" />
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

export default DiagramsScreen;

const styles = StyleSheet.create({
    parentContainer: {
        borderColor: 'purple',
        alignItems: "center",
        borderWidth: 2,
        justifyContent: "center",
        flex: 1
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: Dimensions.get('window').height * 0.2,
        width: Dimensions.get('window').width * 0.2,
        borderWidth: 2,
        borderColor: 'black',
    },
    imageHead: {
        height: (Dimensions.get('window').height * 0.2) - 60,
        width: (Dimensions.get('window').width * 0.2) + 10,
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 10,
    },
    imageNeck: {
        height: (Dimensions.get('window').height * 0.2) - 120,
        width: (Dimensions.get('window').width * 0.2) + 100,
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 10,
    },
    imageTorso: {
        height: (Dimensions.get('window').height * 0.2) - 9,
        width: (Dimensions.get('window').width * 0.2),
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 10,
    },
    imageLeftArm: {
        height: (Dimensions.get('window').height * 0.2) - 10,
        width: (Dimensions.get('window').width * 0.2) - 30,
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 10,
        marginRight: 30,
    },
    imageRightArm: {
        height: (Dimensions.get('window').height * 0.2) - 10,
        width: (Dimensions.get('window').width * 0.2) - 30,
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 10,
        marginLeft: 30,
    },
    imageLeftLeg: {
        height: (Dimensions.get('window').height * 0.2) - 10,
        width: (Dimensions.get('window').width * 0.2) - 30,
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 10,
        marginRight: 10,
    },
    imageRightLeg: {
        height: (Dimensions.get('window').height * 0.2) - 10,
        width: (Dimensions.get('window').width * 0.2) - 30,
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 10,
        marginLeft: 10,
    },
    
})