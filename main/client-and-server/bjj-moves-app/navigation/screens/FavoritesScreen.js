import React, { useContext } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import JiuJitsuMovesCard from '../Card';
import { FavoritesContext } from '../screens/FavoritesContext';

export default function FavoritesScreen({navigation}) {
    const { favorites } = useContext(FavoritesContext);

    const navigateToDescription = (title) => {
        switch (title) {
            case 'Rear Naked':
                navigation.navigate('RearNakedChokeDescription');
                break;
            case 'Triangle':
                navigation.navigate('TriangleChokeDescription');
                break;
            case 'Guillotine':
                navigation.navigate('GuillotineChokeDescription');
                break;
            case 'Straight Ankle Lock':
                navigation.navigate('StraightAnkleDescription');
                break;
            case 'Toe Hold':
                navigation.navigate('ToeHoldDescription');
                break;
            case 'Heel Hook':
                navigation.navigate('HeelHookDescription');
                break;
            case 'Smother Choke':
                navigation.navigate('SmotherChokeDescription');
                break;
            case 'Fulcrum Crank':
                navigation.navigate('FulcrumCrankDescription');
                break;
            case 'Americana':
                navigation.navigate('AmericanaDescription');
                break;
            case 'Kimura':
                navigation.navigate('KimuraDescription');
                break;
            case 'Arm Bar':
                navigation.navigate('ArmBarDescription');
                break;
            default:
                break;
        }
    };

    return (
        <ScrollView>
            {favorites.map((move, index) => (
                <TouchableOpacity key={index} onPress={() => navigateToDescription(move.title)}>
                        <JiuJitsuMovesCard 
                        key={index}
                        image={move.image}
                        title={move.title}
                        subtitle={move.subtitle}
                        description={move.description}
                        onHeartPress={() => {}}
                        isHeartRed={true}
                    />
                </TouchableOpacity>
                
            ))}
        </ScrollView>
    );
}
