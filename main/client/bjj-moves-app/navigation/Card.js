import * as react from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

function JiuJitsuMovesCard({ image, title, subtitle, description }) {
    return (
    <View style={styles.card}>
      <ImageBackground 
        source={image} 
        style={styles.image} 
        imageStyle={styles.imageStyle}
      >
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
    overlay: {
    //   position: 'absolute',
    //   top: 0,
    //   left: 0,
    //   right: 0,
    //   bottom: 0,
    //   justifyContent: 'center',
    //   alignItems: 'center',
        padding: 10,
        borderColor: 'black',
        borderWidth: 2,
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
    time: {
      fontSize: 14,
      color: '#888',
    },
  });