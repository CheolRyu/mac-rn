import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogConext';
import BlogPostForm from '../components/BlogPostForm';
const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  ); //like a sql
  return (
    <BlogPostForm
      inintialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        console.log(title, content);
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
