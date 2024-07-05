import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { supabase } from '../utils/supabase';
import { useFocusEffect } from '@react-navigation/native';

export default function ProfilesScreen({ navigation }) {

    const [session, setSession] = useState(null);
    const [profile, setProfile] = useState({ username: '', full_name: '', avatar_url: '', experience_level: '', personal_bio: '' });

    useFocusEffect(
        React.useCallback(() => {
            fetchSession();
        }, [])
    );

    async function fetchSession() {
        const { data: { session } } = await supabase.auth.getSession();
        setSession(session);
        if (session) {
            getProfile(session);
        }
    }

    async function getProfile(session) {
        try {
            if (!session?.user) throw new Error('No user on the session!');

            const { data, error, status } = await supabase
                .from('profiles')
                .select(`username, full_name, avatar_url, experience_level, personal_bio`)
                .eq('id', session?.user.id)
                .single();

            if (error && status !== 406) {
                throw error;
            }

            if (data) {
                setProfile({
                    username: data.username,
                    full_name: data.full_name,
                    avatar_url: data.avatar_url,
                    experience_level: data.experience_level,
                    personal_bio: data.personal_bio
                });
            }
        } catch (error) {
            if (error instanceof Error) {
                Alert.alert(error.message);
            }
        }
    }

    const handleUpdatePress = () => {
        navigation.navigate('Update Profile', { session, profile });
    };

    return (
        <View style={styles.parentContainer}>
            <Text style={styles.title}>{profile.username || '[Username]'}</Text>
            <View style={styles.profileImgContainer}>
                <Image style={styles.profileImg} source={{ uri: profile.avatar_url || 'https://picsum.photos/id/237/200/300' }}/>
                <Text style={styles.experienceLevel}>{profile.experience_level || '[Experience Level]'}</Text>
            </View>
            <Text style={styles.names}>{profile.full_name || '[First and Last Name]'}</Text>
            <Text style={styles.personalBio}>{profile.personal_bio || '[Personal Bio]'}</Text>
            <TouchableOpacity
                style={styles.updateButton}
                onPress={() => navigation.navigate('Update Profile', { session: session, profile: profile })}
            >
                <Text style={styles.updateButtonText}>Update Profile</Text>
            </TouchableOpacity>
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
        fontSize: 50,
        fontWeight: 'bold',
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
    updateButton: {
        backgroundColor: '#0f4c5c',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignSelf: 'center',
    },
    updateButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});