import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import { supabase } from '../utils/supabase';
import { useFocusEffect } from '@react-navigation/native';

export default function PostDetailsScreen({ route }) {
    const { postId } = route.params;
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [newCommentContent, setNewCommentContent] = useState('');
    const [session, setSession] = useState(null);

    useEffect(() => {
        fetchPost();
        fetchComments();
    }, []);

    

    async function fetchSession() {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) {
            console.error(error);
        } else {
            setSession(session);
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            fetchSession();
        }, [])
    );

    async function fetchPost() {
        const { data, error } = await supabase
            .from('posts')
            .select('*')
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
            .select('*')
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
            .insert([{ post_id: postId, content: newCommentContent, user_id: session?.user.id }]);
        
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
                    <Text style={styles.postContent}>{post.content}</Text>
                    <FlatList
                        data={comments}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.comment}>
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
    postContent: {
        fontSize: 18,
        marginBottom: 16,
    },
    comment: {
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
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
