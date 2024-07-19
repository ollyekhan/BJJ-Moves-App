import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { supabase } from '../utils/supabase';
import { useFocusEffect } from '@react-navigation/native';

export default function PostDetailsScreen({ route, navigation }) {
    const { postId } = route.params;
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [newCommentContent, setNewCommentContent] = useState('');
    const [session, setSession] = useState(null);

    useEffect(() => {
        fetchSession();
    }, []);

    useEffect(() => {
        if (session) {
            fetchPost();
            fetchComments();
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

    async function fetchPost() {
        const { data, error } = await supabase
            .from('posts')
            .select('id, user_id, content, created_at, profiles!inner(username, avatar_url)')
            .eq('id', postId)
            .single();
        
        if (error) {
            console.error(error);
        } else {
            setPost(data);
        }
    }

    async function fetchComments() {
        const { data, error } = await supabase
            .from('comments')
            .select('id, user_id, content, created_at, profiles!inner(username, avatar_url)')
            .eq('post_id', postId)
            .order('created_at', { ascending: true });

        if (error) {
            console.error(error);
        } else {
            setComments(data);
        }
    }

    async function addComment() {
        const { error } = await supabase
            .from('comments')
            .insert([{ 
                post_id: postId, 
                content: newCommentContent, 
                user_id: session?.user.id,
                username: session?.user.username, 
                avatar_url: session?.user.avatar_url 
            }]);
        
        if (error) {
            console.error(error);
        } else {
            setNewCommentContent('');
            fetchComments(); // Refresh the comments list
        }
    }

    return (
        <View style={styles.container}>
            {post && (
                <>
                    <TouchableOpacity 
                        style={styles.postHeader} 
                        onPress={() => navigation.navigate('UserProfile', { userId: post.user_id })}
                    >
                        <Image 
                            style={styles.avatar} 
                            source={{ uri: post.profiles.avatar_url || 'https://example.com/default-avatar.png' }} 
                        />
                        <Text style={styles.username}>{post.profiles.username}</Text>
                    </TouchableOpacity>
                    <Text style={styles.postContent}>{post.content}</Text>
                    <Text style={styles.timestamp}>{new Date(post.created_at).toLocaleString()}</Text>
                    <FlatList
                        data={comments}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.comment}>
                                <TouchableOpacity 
                                    style={styles.commentHeader} 
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
                        )}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Add a comment..."
                        value={newCommentContent}
                        onChangeText={setNewCommentContent}
                    />
                    <Button title="Comment" onPress={addComment} />
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
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
    postContent: {
        fontSize: 18,
        marginBottom: 8,
    },
    comment: {
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    commentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    timestamp: {
        fontSize: 12,
        color: '#888',
    },
});
