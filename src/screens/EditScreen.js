import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogConext';
import BlogPostForm from '../components/BlogPostForm';
const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id); //like a sql
  return (
    <BlogPostForm
      inintialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content, id) => {
        editBlogPost(id, title, content, {() => navigation.navigate('Index')});
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
