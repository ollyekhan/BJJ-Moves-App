import { View, Text, StyleSheet } from 'react-native';

function StraightAnkleDescription() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Straight Ankle</Text>
            <Text style={styles.description}>
                Exercitation eiusmod commodo tempor ipsum ad ea nulla. Aliquip laboris dolore culpa magna do ut Lorem sit dolor anim commodo. Exercitation ad fugiat ipsum sunt non ea laboris non labore aliqua velit nulla sit Lorem. Est ea consequat id labore amet. Sint velit laboris proident commodo velit ipsum officia occaecat ut ex.
            </Text>
        </View>
    );
}

function ToeHoldDescription() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Toe Hold</Text>
            <Text style={styles.description}>
                Exercitation eiusmod commodo tempor ipsum ad ea nulla. Aliquip laboris dolore culpa magna do ut Lorem sit dolor anim commodo. Exercitation ad fugiat ipsum sunt non ea laboris non labore aliqua velit nulla sit Lorem. Est ea consequat id labore amet. Sint velit laboris proident commodo velit ipsum officia occaecat ut ex.
            </Text>
        </View>
    );
}

function HeelHookDescription() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Heel Hook</Text>
            <Text style={styles.description}>
                Exercitation eiusmod commodo tempor ipsum ad ea nulla. Aliquip laboris dolore culpa magna do ut Lorem sit dolor anim commodo. Exercitation ad fugiat ipsum sunt non ea laboris non labore aliqua velit nulla sit Lorem. Est ea consequat id labore amet. Sint velit laboris proident commodo velit ipsum officia occaecat ut ex.
            </Text>
        </View>
    );
}

export { StraightAnkleDescription, ToeHoldDescription, HeelHookDescription };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
    },
});