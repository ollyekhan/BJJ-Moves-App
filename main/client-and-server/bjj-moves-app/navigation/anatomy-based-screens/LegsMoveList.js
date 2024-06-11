import * as react from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import StraightAnkleLock from '../moves-photos/StraightAnkleLock.png';
import ToeHold from '../moves-photos/ToeHold.png';
import HeelHook from '../moves-photos/HeelHook.png';
import JiuJitsuMovesCard from '../Card';

export default function LegsMoveListScreen({navigation}) {
    return (
        <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('StraightAnkleDescription')}>
                <JiuJitsuMovesCard 
                    image={StraightAnkleLock}
                    title="Striaight Ankle Lock"
                    subtitle="Submission"
                    description="The straight ankle lock is a submission technique that is applied from the top or bottom position. The attacker traps the opponent's foot and applies pressure to the ankle joint, causing the opponent to submit due to the amount of pressure placed on the joint."
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ToeHoldDescription')}>
                <JiuJitsuMovesCard 
                    image={ToeHold}
                    title="Toe Hold"
                    subtitle="Submission"
                    description="The toe hold is a submission technique that is applied from the top or bottom position. The attacker traps the opponent's foot and applies pressure to the ankle joint, causing the opponent to submit due to the amount of pressure placed on the joint."
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('HeelHookDescription')}>
                <JiuJitsuMovesCard 
                    image={HeelHook}
                    title="Heel Hook"
                    subtitle="Submission"
                    description="The heel hook is a submission technique that is applied from the top or bottom position. The attacker traps the opponent's foot and applies pressure to the ankle joint, causing the opponent to submit due to the amount of pressure placed on the joint."
                />
            </TouchableOpacity>
        </ScrollView>
    );
}