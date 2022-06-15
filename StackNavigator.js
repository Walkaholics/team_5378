//rnfe
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Launch from './screens/Launch';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import MainPage from './screens/MainPage';
import { signIn } from './supabaseClient';
import AccountPage from './screens/AccountPage';
import GettingStarted from './screens/GettingStarted';
import UserData from './screens/Userdata';
import UserGoal from './screens/Usergoal';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="Launch" component={Launch} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="AccountPage" component={AccountPage} />
        <Stack.Screen name="GettingStarted" component={GettingStarted} />
        <Stack.Screen name="UserGoal" component={UserGoal} />
        <Stack.Screen name="UserData" component={UserData} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
