//rnfe
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./screens/Home";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import MainPage from "./screens/MainPage";
import { signIn } from "./supabaseClient";
import AccountPage from "./screens/AccountPage";
import GettingStarted from "./screens/GettingStarted"

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Group>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="MainPage" component={MainPage} />
                <Stack.Screen name="AccountPage" component={AccountPage} />
                <Stack.Screen name="GettingStarted" component={GettingStarted} />
            </Stack.Group>

        </Stack.Navigator>
    )

}

export default StackNavigator;