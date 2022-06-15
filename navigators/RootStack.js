import React from "react";

import { Colors } from "../components/styles";

const {primary, secondary} = Colors;

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from './../screens/Login'
import Signup from './../screens/Signup'
import Welcome from './../screens/Welcome'
import CameraPage from "../screens/CameraPage";

const Stack = createStackNavigator();

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                 screenOptions={{
                    headerStyled:{
                        backgroundColor: 'transparent'
                    },
                    headerTintColor: secondary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeft: null,
                }} 
                initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Signup" component={Signup}/>
                <Stack.Screen options={{headerTintColor: primary }} name="Welcome" component={Welcome}/>
                <Stack.Screen name = "CameraPage" component={CameraPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;