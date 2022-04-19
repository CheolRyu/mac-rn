import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import indexScreen from './src/screens/indexScreen';
import { BlogProvider } from './src/context/BlogConext';

const navigator = createStackNavigator(
  {
    Index: indexScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blog',
    },
  }
);
const App = createAppContainer(navigator);
export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
