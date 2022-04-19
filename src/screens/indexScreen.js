import React, { useContext } from 'react';
import { View, StyleSheet, Text, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogConext';

const Indexscreen = () => {
  const { state, addBlogPost } = useContext(Context);
  return (
    <View>
      <Text>Hello from index Screen</Text>
      <Button title='Add Post' onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Indexscreen;
