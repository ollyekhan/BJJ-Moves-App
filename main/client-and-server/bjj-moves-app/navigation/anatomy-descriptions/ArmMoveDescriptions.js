import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';

function AmericanaDescription() {
    const mountInstructions = [
        {key: '1', bold: 'Select the arm of your opponent:', text: ' that you want to attack.'},
        {key: '2', bold: 'Secure your opponent’s elbow and wrist:', text: ' to the ground.'},
        {key: '3', bold: 'Keep your elbows:', text: ' close to your opponent’s face.'},
        {key: '4', bold: 'Grab your opponent’s wrist using a figure-four grip:', text: ' To do this, hold their wrist with one hand while your other hand grabs your own wrist (which is already gripping your opponent’s wrist).'},
        {key: '5', bold: 'Lift your opponent’s elbow while simultaneously driving their wrist down:', text: ' This leverage will limit their flexibility and make it difficult for them to withstand shoulder pressure.'},
    ];

    const sideControlInstructions = [
        {key: '1', bold: 'Select the arm of your opponent:', text: ' that you want to attack.'},
        {key: '2', bold: 'Secure your opponent’s elbow and wrist:', text: ' to the ground.'},
        {key: '3', bold: 'Keep your elbows:', text: ' close to your opponent’s face.'},
        {key: '4', bold: 'Grab your opponent’s wrist using a figure-four grip:', text: ' To do this, hold their wrist with one hand while your other hand grabs your own wrist (which is already gripping your opponent’s wrist).'},
        {key: '5', bold: 'Lift your opponent’s elbow while simultaneously driving their wrist down:', text: ' This leverage will limit their flexibility and make it difficult for them to withstand shoulder pressure.'},
    ];

    const renderItem = ({item}) => (
        <Text style={styles.description}>
            <Text style={styles.bold}>{item.bold}</Text>
            {item.text}
        </Text>
    );

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Americana</Text>
            <Text style={styles.subtitle}>Mount</Text>
            <FlatList 
                data={mountInstructions}
                renderItem={renderItem}
            />
            <Text style={styles.subtitle}>Side Control</Text>
            <FlatList 
                data={sideControlInstructions}
                renderItem={renderItem}
            />
        </ScrollView>
    );
}

function KimuraDescription() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Kimura</Text>
            <Text style={styles.description}>
                Exercitation eiusmod commodo tempor ipsum ad ea nulla. Aliquip laboris dolore culpa magna do ut Lorem sit dolor anim commodo. Exercitation ad fugiat ipsum sunt non ea laboris non labore aliqua velit nulla sit Lorem. Est ea consequat id labore amet. Sint velit laboris proident commodo velit ipsum officia occaecat ut ex.
            </Text>
        </View>
    );
}

function ArmBarDescription() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Arm Bar</Text>
            <Text style={styles.description}>
                Exercitation eiusmod commodo tempor ipsum ad ea nulla. Aliquip laboris dolore culpa magna do ut Lorem sit dolor anim commodo. Exercitation ad fugiat ipsum sunt non ea laboris non labore aliqua velit nulla sit Lorem. Est ea consequat id labore amet. Sint velit laboris proident commodo velit ipsum officia occaecat ut ex.
            </Text>
        </View>
    );
}

export { AmericanaDescription, KimuraDescription, ArmBarDescription };

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderWidth: 2,
        borderColor: 'pink',
        paddingBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 5,
    },
    bold: {
        fontWeight: 'bold',
    },
});