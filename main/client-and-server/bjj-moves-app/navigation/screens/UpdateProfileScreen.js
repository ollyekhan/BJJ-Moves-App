import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';
import { supabase } from '../utils/supabase';

export default function UpdateProfileScreen({ route, navigation }) {
    const { session, profile } = route.params;
    const [username, setUsername] = useState(profile.username);
    const [fullName, setFullName] = useState(profile.full_name);
    const [avatarUrl, setAvatarUrl] = useState(profile.avatar_url);
    const [experienceLevel, setExperienceLevel] = useState(profile.experience_level);
    const [personalBio, setPersonalBio] = useState(profile.personal_bio);

    async function updateProfile({ username, full_name, avatar_url, experience_level, personal_bio }) {
        try {
            if (!session?.user) throw new Error('No user on the session!');

            const updates = {
                id: session?.user.id,
                username,
                full_name,
                avatar_url,
                experience_level,
                personal_bio,
                updated_at: new Date(),
            };

            const { error } = await supabase.from('profiles').upsert(updates);

            if (error) {
                throw error;
            }
            Alert.alert('Profile updated successfully');
            navigation.goBack();
        } catch (error) {
            if (error instanceof Error) {
                Alert.alert(error.message);
            }
        }
    }

    const handleUpdateProfile = () => {
        updateProfile({
            username: username,
            full_name: fullName,
            avatar_url: avatarUrl,
            experience_level: experienceLevel,
            personal_bio: personalBio,
        });
    };

  return (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
        />
        <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
        />
        <TextInput
            style={styles.input}
            placeholder="Avatar URL"
            value={avatarUrl}
            onChangeText={setAvatarUrl}
        />
        <TextInput
            style={styles.input}
            placeholder="Experience Level"
            value={experienceLevel}
            onChangeText={setExperienceLevel}
        />
        <TextInput
            style={styles.input}
            placeholder="Personal Bio"
            value={personalBio}
            onChangeText={setPersonalBio}
        />
        <Button title={'Update Profile'} onPress={handleUpdateProfile}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
    },
});

