import * as react from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function JiuJitsuMovesCard({ image, title, subtitle, description, onHeartPress, isHeartRed }) {
  return (
    <View style={styles.card}>
      <ImageBackground 
        source={image} 
        style={styles.image} 
        imageStyle={styles.imageStyle}
      >
        <TouchableOpacity onPress={onHeartPress} style={styles.iconContainer}>
          <Ionicons 
            name={isHeartRed ? "heart" : "heart-outline"} 
            size={24} 
            color={isHeartRed ? "red" : "white"} 
          />
        </TouchableOpacity>
        <View style={styles.overlay}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </ImageBackground>
      <View style={styles.textContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

export default JiuJitsuMovesCard;

const styles = StyleSheet.create({
    card: {
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: '#fff',
      elevation: 3, // for Android shadow
      shadowColor: '#000', // for iOS shadow
      shadowOffset: { width: 0, height: 2 }, // for iOS shadow
      shadowOpacity: 0.2, // for iOS shadow
      shadowRadius: 2, // for iOS shadow
      margin: 10,
    },
    image: {
      width: '100%',
      height: 200,
      justifyContent: 'flex-end',
    },
    imageStyle: {
      opacity: 0.4, // Adjust the opacity to make the image faded
    },
    iconContainer: {  
      position: 'absolute',
      top: 10,
      right: 10,
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderRadius: 20,
      padding: 5,
    },
    overlay: {
      padding: 5,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'left',
    },
    subtitle: {
      fontSize: 16,
      color: 'black',
      textAlign: 'left',
      marginBottom: 10,
    },
    textContainer: {
      padding: 15,
    },
    description: {
      fontSize: 14,
      color: '#333',
      marginBottom: 10,
    },
  });