import * as react from 'react';
import { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import rearNakedChokeImage from '../moves-photos/RearNakedChokeImage.png';
import triangleChokeImage from '../moves-photos/TriangleChokeImage.png';
import guillotineChokeImage from '../moves-photos/GuillotineChokeImage.png';
import JiuJitsuMovesCard from '../Card';

function NeckMoveListScreen({navigation}) {
    const [heartStates, setHeartStates] = useState({
        rearNakedChoke: false,
        triangleChoke: false,
        guillotineChoke: false,
    });

    const toggleHeart = (move) => {
        setHeartStates((prevStates) => ({
            ...prevStates,
            [move]: !prevStates[move],
        }));
    };

    return (
        <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('RearNakedChokeDescription')}>
                <JiuJitsuMovesCard 
                    image={rearNakedChokeImage}
                    title="Rear Naked"
                    subtitle="Submission"
                    description="The rear naked choke is a submission technique that is applied from the back mount position. The attacker wraps their arm around the opponent's neck and applies pressure to the carotid arteries, causing the opponent to lose consciousness if the choke is not released."
                    onHeartPress={() => toggleHeart('rearNakedChoke')}
                    isHeartRed={heartStates.rearNakedChoke}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TriangleChokeDescription')}>
                <JiuJitsuMovesCard 
                    image={triangleChokeImage}
                    title="Triangle"
                    subtitle="Submission"
                    description="The triangle choke is a submission technique that is applied from the guard position. The attacker uses their legs to trap the opponent's head and arm, creating a triangle shape. The attacker then applies pressure to the opponent's neck and shoulder, causing them to submit or lose consciousness if the choke is not released."
                    onHeartPress={() => toggleHeart('triangleChoke')}
                    isHeartRed={heartStates.triangleChoke}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('GuillotineChokeDescription')}>
                <JiuJitsuMovesCard 
                    image={guillotineChokeImage}
                    title="Guillotine"
                    subtitle="Submission"
                    description="The guillotine choke is a submission technique that is applied from the standing or guard position. The attacker wraps their arm around the opponent's neck and applies pressure to the trachea, causing the opponent to submit or lose consciousness if the choke is not released"
                    onHeartPress={() => toggleHeart('guillotineChoke')}
                    isHeartRed={heartStates.guillotineChoke}
                />
            </TouchableOpacity>
        </ScrollView>
    );
}

export default NeckMoveListScreen;