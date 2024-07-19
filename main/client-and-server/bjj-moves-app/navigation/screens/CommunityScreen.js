import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { supabase } from '../utils/supabase';
import { useFocusEffect } from '@react-navigation/native';

export default function CommunityScreen({ navigation }) {
    const [posts, setPosts] = useState([]);
    const [newPostContent, setNewPostContent] = useState('');
    const [session, setSession] = useState(null);

    useFocusEffect(
        React.useCallback(() => {
            fetchSession();
        }, [])
    );

    async function fetchSession() {
        const { data: { session } } = await supabase.auth.getSession();
        setSession(session);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    async function fetchPosts() {
        const { data, error } = await supabase
            .from('posts')
            .select('id, user_id, content, created_at, profiles!inner(username, avatar_url)')
            .order('created_at', { ascending: false });

        if (error) {
            console.error(error);
        } else {
            setPosts(data);
        }
    }

    async function createPost() {
        const { data, error } = await supabase
            .from('posts')
            .insert([{ content: newPostContent, user_id: session?.user.id }]);

        if (error) {
            console.error(error);
        } else {
            setNewPostContent('');
            fetchPosts(); // Refresh the posts list
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Community Posts</Text>
            <TextInput
                style={styles.input}
                placeholder="What's on your mind?"
                value={newPostContent}
                onChangeText={setNewPostContent}
            />
            <Button title="Post" onPress={createPost} />

            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('PostDetails', { postId: item.id })}>
                        <View style={styles.post}>
                            <TouchableOpacity 
                                style={styles.postHeader} 
                                onPress={() => navigation.navigate('UserProfile', { userId: item.user_id })}
                            >
                                <Image 
                                    style={styles.avatar} 
                                    source={{ uri: item.profiles.avatar_url || 'https://example.com/default-avatar.png' }} 
                                />
                                <Text style={styles.username}>{item.profiles.username}</Text>
                            </TouchableOpacity>
                            <Text>{item.content}</Text>
                            <Text style={styles.timestamp}>{new Date(item.created_at).toLocaleString()}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    post: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 8,
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    timestamp: {
        fontSize: 12,
        color: '#888',
    },
});
