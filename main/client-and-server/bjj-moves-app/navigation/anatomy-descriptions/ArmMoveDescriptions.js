import { View, Text, StyleSheet, SectionList, TouchableOpacity, Linking } from 'react-native';

function AmericanaDescription() {
    const mountInstructions = [
        {key: '1', bold: 'Select the arm of your opponent', text: ' that you want to attack.'},
        {key: '2', bold: 'Secure your opponent’s elbow and wrist', text: ' to the ground.'},
        {key: '3', bold: 'Keep your elbows', text: ' close to your opponent’s face.'},
        {key: '4', bold: 'Grab your opponent’s wrist using a figure-four grip', text: ' To do this, hold their wrist with one hand while your other hand grabs your own wrist (which is already gripping your opponent’s wrist).'},
        {key: '5', bold: 'Lift your opponent’s elbow while simultaneously driving their wrist down', text: ' This leverage will limit their flexibility and make it difficult for them to withstand shoulder pressure.'},
    ];

    const sideControlInstructions = [
        {key: '1', bold: 'Select the arm of your opponent', text: ' that you want to attack.'},
        {key: '2', bold: 'Secure your opponent’s elbow and wrist', text: ' to the ground.'},
        {key: '3', bold: 'Keep your elbows', text: ' close to your opponent’s face.'},
        {key: '4', bold: 'Grab your opponent’s wrist using a figure-four grip', text: ' To do this, hold their wrist with one hand while your other hand grabs your own wrist (which is already gripping your opponent’s wrist).'},
        {key: '5', bold: 'Lift your opponent’s elbow while simultaneously driving their wrist down', text: ' This leverage will limit their flexibility and make it difficult for them to withstand shoulder pressure.'},
    ];

    const sections = [
        { title: 'Mount', data: mountInstructions },
        { title: 'Side Control', data: sideControlInstructions },
    ];

    const renderItem = ({ item }) => (
        <Text style={styles.description}>
            <Text style={styles.bold}>{item.bold}</Text>
            {item.text}
        </Text>
    );

    const renderSectionHeader = ({ section }) => (
        <Text style={styles.subtitle}>{section.title}</Text>
    );

    const openURL = (url) => {
        Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
    };

    const renderFooter = () => (
        <TouchableOpacity onPress={() => openURL('https://evolve-mma.com/blog/bjj-101-the-americana/')}>
          <Text style={styles.link}>Press here for more information about the Americana</Text>
        </TouchableOpacity>
    );
      
      

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Americana</Text>
            <SectionList
                sections={sections}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={(item, index) => item.key + index}
                contentContainerStyle={styles.listContent}
                ListFooterComponent={renderFooter}
            />
        </View>
    );
}

function KimuraDescription() {
    const kimuraInstructions = [
        {
          key: '1',
          bold: 'Secure an overhook on your opponent’s arm',
          text: ' while in guard or side control.',
        },
        {
          key: '2',
          bold: 'Grab your own wrist',
          text: ' to form a figure-four grip.',
        },
        {
          key: '3',
          bold: 'Pull your opponent’s elbow towards their back',
          text: ' while keeping their wrist stationary.',
        },
        {
          key: '4',
          bold: 'Apply pressure',
          text: ' by lifting their elbow and rotating their shoulder.',
        },
    ];

    const sections = [
        {
          title: 'Kimura from Guard',
          data: kimuraInstructions,
          url: 'https://en.wikipedia.org/wiki/Armlock',
        },
      ];
    
      const openURL = (url) => {
        Linking.openURL(url).catch((err) =>
          console.error('Failed to open URL:', err)
        );
      };
    
      const renderItem = ({ item }) => (
        <Text style={styles.description}>
          <Text style={styles.bold}>{item.bold}</Text>
          {item.text}
        </Text>
      );
    
      const renderSectionHeader = ({ section }) => (
        <Text style={styles.subtitle}>{section.title}</Text>
      );
    
      const renderSectionFooter = ({ section }) => (
        <TouchableOpacity onPress={() => openURL(section.url)}>
          <Text style={styles.link}>Learn more about {section.title}</Text>
        </TouchableOpacity>
      );


    return (
    <View style={styles.container}>
      <Text style={styles.title}>Kimura</Text>
      <SectionList
        sections={sections}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        renderSectionFooter={renderSectionFooter}
        keyExtractor={(item, index) => item.key + index}
        contentContainerStyle={styles.listContent}
      />
    </View>
    );
}

function ArmBarDescription() {
    const armBarInstructions = [
        {
          key: '1',
          bold: 'Isolate your opponent’s arm',
          text: ' by controlling their wrist and elbow.',
        },
        {
          key: '2',
          bold: 'Position your leg over their head',
          text: ' to prevent them from escaping.',
        },
        {
          key: '3',
          bold: 'Secure their arm between your legs',
          text: ' and squeeze your knees together.',
        },
        {
          key: '4',
          bold: 'Lift your hips',
          text: ' to hyperextend their elbow and finish the submission.',
        },
    ];

    const sections = [
        {
          title: 'Arm Bar from Mount',
          data: armBarInstructions,
          url: 'https://www.infighting.ca/bjj/the-armbar-guide-28-ways-to-armbar-someone-in-bjj/',
        },
      ];
    
      const openURL = (url) => {
        Linking.openURL(url).catch((err) =>
          console.error('Failed to open URL:', err)
        );
      };
    
      const renderItem = ({ item }) => (
        <Text style={styles.description}>
          <Text style={styles.bold}>{item.bold}</Text>
          {item.text}
        </Text>
      );
    
      const renderSectionHeader = ({ section }) => (
        <Text style={styles.subtitle}>{section.title}</Text>
      );
    
      const renderSectionFooter = ({ section }) => (
        <TouchableOpacity onPress={() => openURL(section.url)}>
          <Text style={styles.link}>Learn more about {section.title}</Text>
        </TouchableOpacity>
      );
    

    return (
    <View style={styles.container}>
      <Text style={styles.title}>Arm Bar</Text>
      <SectionList
        sections={sections}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        renderSectionFooter={renderSectionFooter}
        keyExtractor={(item, index) => item.key + index}
        contentContainerStyle={styles.listContent}
      />
    </View>
    );
}

export { AmericanaDescription, KimuraDescription, ArmBarDescription };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    listContent: {
        paddingBottom: 10,
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
        marginTop: 20,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 5,
    },
    bold: {
        fontWeight: 'bold',
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginTop: 10,
        marginBottom: 20,
        fontSize: 16,
    },
});