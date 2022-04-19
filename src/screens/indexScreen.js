import React, { useContext } from 'react';
import { View, StyleSheet, Text, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogConext';

const Indexscreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text>Hello from index Screen</Text>
      <Button title='Add Post' onPress={addBlogPost} />
      <FlatList
        data={data}
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
