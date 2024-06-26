import * as react from 'react';
import { useContext, useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import americana from '../moves-photos/Americana.png';
import kimura from '../moves-photos/Kimura.png';
import armBar from '../moves-photos/ArmBar.png';
import JiuJitsuMovesCard from '../Card';
import { FavoritesContext } from '../screens/FavoritesContext';

export default function ArmsMoveListScreen({navigation}) {
    const { addToFavorites, removeFromFavorites } = useContext(FavoritesContext);
    const [heartStates, setHeartStates] = useState({
        Americana: false,
        Kimura: false,
        ArmBar: false,
    });

    const toggleHeart = (move, moveData) => {
        setHeartStates((prevStates) => {
            const newState = !prevStates[move];
            if (newState) {
                addToFavorites(moveData);
            } else {
                removeFromFavorites(moveData);
            }
            return {
                ...prevStates,
                [move]: newState,
            };
        });
    };

    return (
        <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('AmericanaDescription')}>
                <JiuJitsuMovesCard 
                    image={americana}
                    title="Americana"
                    subtitle="Submission"
                    description="The americana is a submission technique that is applied from the side control position. The attacker traps the opponent's arm and applies pressure to the shoulder joint, causing the opponent to submit due to the amount of pressure placed on the joint."
                    onHeartPress={() => toggleHeart('Americana', {
                        image: americana,
                        title: "Americana",
                        subtitle: "Submission",
                        description: "The americana is a submission technique that is applied from the side control position. The attacker traps the opponent's arm and applies pressure to the shoulder joint, causing the opponent to submit due to the amount of pressure placed on the joint."
                    })}
                    isHeartRed={heartStates.Americana}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('KimuraDescription')}>
                <JiuJitsuMovesCard 
                    image={kimura}
                    title="Kimura"
                    subtitle="Submission"
                    description="The kimura is a submission technique that is applied from the side control position. The attacker traps the opponent's arm and applies pressure to the shoulder joint, causing the opponent to submit due to the amount of pressure placed on the joint."
                    onHeartPress={() => toggleHeart('Kimura', {
                        image: kimura,
                        title: "Kimura",
                        subtitle: "Submission",
                        description: "The kimura is a submission technique that is applied from the side control position. The attacker traps the opponent's arm and applies pressure to the shoulder joint, causing the opponent to submit due to the amount of pressure placed on the joint."
                    })}
                    isHeartRed={heartStates.Kimura}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ArmBarDescription')}>
                <JiuJitsuMovesCard 
                    image={armBar}
                    title="Arm Bar"
                    subtitle="Submission"
                    description="The arm bar is a submission technique that is applied from the guard or mount position. The attacker traps the opponent's arm and applies pressure to the elbow joint, causing the opponent to submit due to the amount of pressure placed on the joint."
                    onHeartPress={() => toggleHeart('ArmBar', {
                        image: armBar,
                        title: "Arm Bar",
                        subtitle: "Submission",
                        description: "The arm bar is a submission technique that is applied from the guard or mount position. The attacker traps the opponent's arm and applies pressure to the elbow joint, causing the opponent to submit due to the amount of pressure placed on the joint."
                    })}
                    isHeartRed={heartStates.ArmBar}
                />
            </TouchableOpacity>
        </ScrollView>
    );
}