import * as react from 'react';
import { ScrollView } from 'react-native';
import JiuJitsuMovesCard from '../Card';
import fulcrumCrankImage from '../moves-photos/FulcrumCrank.png';
import smotherChokeImage from '../moves-photos/SmotherChoke.png';

export default function HeadMoveListScreen({navigation}) {
    return (
        // <View style={{alignItems: "center", flex: 1, justifyContent: "center"}}>
        //     <Text
        //         onPress= {() => alert("Head Screen")} 
        //         style={{fontSize: 26, fontWeight: "bold"}}>Head Move List Screen</Text>
        // </View>
        <ScrollView>
            <JiuJitsuMovesCard 
                image={fulcrumCrankImage}
                title="Fulcrum Crank"
                subtitle="Submission"
                description="The fulcrum crank is a submission technique that is applied from the back position. The attacker traps the opponent's arm and head, creating a fulcrum with their own body. The attacker then applies pressure to the opponent's shoulder and neck, causing them to submit because of the sheer amount of pressure placed on their chin."
            />
            <JiuJitsuMovesCard 
                image={smotherChokeImage}
                title="Smother Choke"
                subtitle="Dirty Submission"
                description="The smother choke is a submission technique that is applied from the back position. The attacker uses their hand to cover the opponent's mouth and nose, cutting off their air supply, while controlling the opponent's body with their legs to prevent escape. This technique relies on maintaining pressure and control to force a submission."
            />
        </ScrollView>
    );
}