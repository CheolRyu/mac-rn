import React, { useContext } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Context } from '../context/BlogConext';
import { Feather } from '@expo/vector-icons';

const Indexscreen = () => {
  const { state, addBlogPost } = useContext(Context);
  return (
    <View>
      <Button title='Add Post' onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.title}, ID: {item.id}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  console.log(item.id);
                }}>
                <Feather name='trash' style={styles.icon} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    paddingHorizontal: 10,
    borderColor: 'grey',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
    color: 'red',
  },
});

export default Indexscreen;
