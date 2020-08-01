import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from 'App/Containers/SignInScreen/SignInScreen';
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="initialRouteName" headerMode="none">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="MainScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
