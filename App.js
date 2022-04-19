import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import indexScreen from './src/screens/indexScreen';
import ShowScreen from './src/screens/ShowScreen';
import { Provider } from './src/context/BlogConext';

const navigator = createStackNavigator(
  {
    Index: indexScreen,
    Detail: ShowScreen,
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
    <Provider>
      <App />
    </Provider>
  );
};
