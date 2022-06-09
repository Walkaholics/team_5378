//rnfe
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./screens/Home";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import MainPage from "./screens/MainPage";
import { signIn } from "./supabaseClient";
import SettingsPage from "./screens/SettingsPage";
import GettingStarted from "./screens/GettingStarted"
import ReportPage from "./screens/ReportPage"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        //<Stack.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Navigator>
            <Tab.Group>
                <Tab.Screen name="MainPage" component={MainPage} />
                <Tab.Screen name="SettingsPage" component={SettingsPage} />
                <Tab.Screen name="ReportPage" component={ReportPage} />
            </Tab.Group>

        </Tab.Navigator>
    )

}

export default TabNavigator;