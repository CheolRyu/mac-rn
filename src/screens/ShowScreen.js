import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context } from '../context/BlogConext';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  // const post = navigation.getParam('id');
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  ); //like a sql

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
