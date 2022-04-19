import React, { useContext } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Context } from '../context/BlogConext';
import { Feather } from '@expo/vector-icons';

const Indexscreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Detail', { id: item.id })}>
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title}, ID: {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name='trash' style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

Indexscreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name='plus' size={30} />
      </TouchableOpacity>
    ),
  };
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
