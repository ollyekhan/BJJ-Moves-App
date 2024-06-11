import { View, Text, StyleSheet } from 'react-native';

function RearNakedChokeDescription() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rear Naked Choke</Text>
            <Text style={styles.description}>
                Exercitation eiusmod commodo tempor ipsum ad ea nulla. Aliquip laboris dolore culpa magna do ut Lorem sit dolor anim commodo. Exercitation ad fugiat ipsum sunt non ea laboris non labore aliqua velit nulla sit Lorem. Est ea consequat id labore amet. Sint velit laboris proident commodo velit ipsum officia occaecat ut ex.
            </Text>
        </View>
    );
}

function TriangleChokeDescription() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Triangle Choke</Text>
            <Text style={styles.description}>
                Exercitation eiusmod commodo tempor ipsum ad ea nulla. Aliquip laboris dolore culpa magna do ut Lorem sit dolor anim commodo. Exercitation ad fugiat ipsum sunt non ea laboris non labore aliqua velit nulla sit Lorem. Est ea consequat id labore amet. Sint velit laboris proident commodo velit ipsum officia occaecat ut ex.
            </Text>
        </View>
    );
}

function GuillotineChokeDescription() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Guillotine Choke</Text>
            <Text style={styles.description}>
                Exercitation eiusmod commodo tempor ipsum ad ea nulla. Aliquip laboris dolore culpa magna do ut Lorem sit dolor anim commodo. Exercitation ad fugiat ipsum sunt non ea laboris non labore aliqua velit nulla sit Lorem. Est ea consequat id labore amet. Sint velit laboris proident commodo velit ipsum officia occaecat ut ex.
            </Text>
        </View>
    );
}

export { RearNakedChokeDescription, TriangleChokeDescription, GuillotineChokeDescription };

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