import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
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

    useEffect(() => {
        if (session) {
            fetchPosts();
        }
    }, [session]);

    async function fetchSession() {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) {
            console.error(error);
        } else {
            setSession(session);
        }
    }

    async function fetchPosts() {
        const { data, error } = await supabase
            .from('posts')
            .select('id, user_id, content, created_at')
            .order('created_at', { ascending: false });
        
        if (error) {
            console.error(error);
        } else {
            setPosts(data);
        }
    }

    async function createPost() {
        if (!newPostContent) return;
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
    timestamp: {
        fontSize: 12,
        color: '#888',
    },
});
