import * as react from 'react';
import { ScrollView } from 'react-native';
import americana from '../moves-photos/Americana.png';
import kimura from '../moves-photos/Kimura.png';
import armBar from '../moves-photos/ArmBar.png';
import JiuJitsuMovesCard from '../Card';

export default function ArmsMoveListScreen({navigation}) {
    return (
        <ScrollView>
            <JiuJitsuMovesCard 
                image={americana}
                title="Americana"
                subtitle="Submission"
                description="The americana is a submission technique that is applied from the side control position. The attacker traps the opponent's arm and applies pressure to the shoulder joint, causing the opponent to submit due to the amount of pressure placed on the joint."
            />
            <JiuJitsuMovesCard 
                image={kimura}
                title="Kimura"
                subtitle="Submission"
                description="The kimura is a submission technique that is applied from the side control position. The attacker traps the opponent's arm and applies pressure to the shoulder joint, causing the opponent to submit due to the amount of pressure placed on the joint."
            />
            <JiuJitsuMovesCard 
                image={armBar}
                title="Arm Bar"
                subtitle="Submission"
                description="The arm bar is a submission technique that is applied from the guard or mount position. The attacker traps the opponent's arm and applies pressure to the elbow joint, causing the opponent to submit due to the amount of pressure placed on the joint."
            />
        </ScrollView>
    );
}