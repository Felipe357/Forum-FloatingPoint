import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import telaLogin from './pages/login'
import telaPost from './pages/posts'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={telaLogin} />
        <Stack.Screen name="Post" component={telaPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}