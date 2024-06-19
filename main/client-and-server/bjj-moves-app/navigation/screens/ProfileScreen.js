import * as react from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { supabase } from '../utils/supabase';

export default function ProfilesScreen({navigation}) {
    const [profile, setProfile] = react.useState(null);

    react.useEffect(() => {
        // Fetch the user profile
        const fetchProfile = async () => {
            const user = supabase.auth.user();
            if (user) {
                const { data, error } = await supabase
                    .from('users')
                    .select('*')
                    .eq('id', user.user_id)
                    .single();
                
                if (error) {
                    console.error(error);
                } else {
                    setProfile(data);
                }
            }
        };

        fetchProfile();
    }, []);

    // if (!profile) {
    //     return (
    //         <View style={styles.loadingContainer}>
    //             <Text>Loading...</Text>
    //         </View>
    //     );
    // }


    return (
        <View style={styles.parentContainer}>
            <Text style={styles.title}>[Username]</Text>
            <View style={styles.profileImgContainer}>
                <Image style={styles.profileImg} source={{uri: "https://picsum.photos/id/237/200/300"}}/>
                <Text style={styles.experienceLevel}>[Experience Level]</Text>
            </View>
            <Text style={styles.names}>[First and Last Name]</Text>
            <Text style={styles.personalBio}>[Personal Bio]</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'purple',
    },
    title: {
        borderColor: 'red',
        borderWidth: 2,
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 28,

    },
    profileImgContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'blue',
        marginBottom: 20,
        alignItems: 'center',
    },
    profileImg: {
        width: 150,
        height: 150,
        borderColor: 'green',
        borderWidth: 2,
        borderRadius: 100,
        margin: 10,
    },
    experienceLevel: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
    },
    names: {
        fontSize: 20,
        fontWeight: '500',
        borderWidth: 2,
        borderColor: 'purple',
        marginBottom: 20,
    },
    personalBio: {
        fontSize: 13,
        color: '#929292',
        fontWeight: '500',
        borderWidth: 2,
        borderColor: 'purple',
        marginBottom: 20,
    },
});