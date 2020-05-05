import React, { useContext } from 'react';
import { View, StyleSheet, Text, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';




const IndexScreen = () => {
    const { state, addBlogPost } = useContext(Context);
    return (
        <View>
            <Text>IndexScreen</Text>
            <Button title='Add post' onPress={addBlogPost} />
            <FlatList
                data={state}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default IndexScreen;