//rnfe
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Launch from './screens/Launch';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import MainPage from './screens/MainPage';
import { signIn } from './supabaseClient';
import SettingsPage from './screens/SettingsPage';
import UserData from './screens/UserData';
import UserGoal from './screens/UserGoal';
import ReportPage from './screens/ReportPage';
import PlansPage from './screens/PlansPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Octicons, Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const PlansNavigator = () => {
  return (
    //<Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="PlansPage" component={PlansPage} />
        {/*
                <Stack.Screen name="MainPage" component={MainPage} />
                <Stack.Screen name="SettingsPage" component={SettingsPage} />              
                <Stack.Screen name="ReportPage" component={ReportPage} />
                */}
      </Stack.Group>
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    //<Stack.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        //tabBarStyle: {backgroundColor: 'rgb(255,153,48)'},
      }}
    >
      <Tab.Group>
        <Tab.Screen
          name="MainPage"
          component={MainPage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ReportPage"
          component={ReportPage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="stats-chart-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="PlansNavigator"
          component={PlansNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="body-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="SettingsPage"
          component={SettingsPage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cog-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    //<Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="Launch" component={Launch} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="UserData" component={UserData} />
        <Stack.Screen name="UserGoal" component={UserGoal} />
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="MainPage" component={MainPage} />
        {/*
                <Stack.Screen name="SettingsPage" component={SettingsPage} />              
                <Stack.Screen name="ReportPage" component={ReportPage} />
                */}
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
