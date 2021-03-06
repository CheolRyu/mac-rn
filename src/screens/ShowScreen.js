import React, { useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogConext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  // const post = navigation.getParam('id');
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  ); //like a sql

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }>
        <EvilIcons name='pencil' size={35} />
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({});

export default ShowScreen;
