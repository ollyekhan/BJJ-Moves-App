import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { supabase } from '../utils/supabase';

export default function UserProfileScreen({ route }) {
    const { userId } = route.params;
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetchUserProfile();
    }, []);

    async function fetchUserProfile() {
        const { data, error } = await supabase
            .from('profiles')
            .select('username, full_name, avatar_url, experience_level, personal_bio')
            .eq('id', userId)
            .single();
        
        if (error) {
            console.error(error);
        } else {
            setProfile(data);
        }
    }

    return (
        <View style={styles.container}>
            {profile && (
                <>
                    <Image 
                        style={styles.avatar} 
                        source={{ uri: profile.avatar_url || 'https://example.com/default-avatar.png' }} 
                    />
                    <Text style={styles.username}>{profile.username}</Text>
                    <Text style={styles.fullName}>{profile.full_name}</Text>
                    <Text style={styles.experienceLevel}>{profile.experience_level}</Text>
                    <Text style={styles.personalBio}>{profile.personal_bio}</Text>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    fullName: {
        fontSize: 18,
    },
    experienceLevel: {
        fontSize: 16,
        color: '#888',
    },
    personalBio: {
        fontSize: 14,
        color: '#666',
        marginTop: 8,
        textAlign: 'center',
    },
});
