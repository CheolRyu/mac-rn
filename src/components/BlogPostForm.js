import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';

const BlogPostForm = ({ onSubmit, inintialValues }) => {
  const [title, setTitle] = useState(inintialValues.title);
  const [content, setContent] = useState(inintialValues.content);
  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title='Save' onPress={() => onSubmit(title, content)} />
    </View>
  );
};
BlogPostForm.defaultProps = {
  inintialValues: {
    title: '',
    content: '',
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default BlogPostForm;
