import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import TextboxScreen from "./screens/TextboxScreen";
import ResultScreen from "./screens/ResultScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" 
                          component={HomeScreen}
                          options={{
                              headerShown: false,                             
                          }} />
            <Stack.Screen name="Login" 
                          component={LoginScreen} 
                          options={{
                            //headerShown: false,  
                          }}    />
            <Stack.Screen name="Textbox" 
                          component={TextboxScreen} 
                          options={{
                            //headerShown: false,  
                          }}    />
            <Stack.Screen name="Result" 
                          component={ResultScreen} 
                          options={{
                            //headerShown: false,  
                          }}    />
        </Stack.Navigator>
    );
};

export default StackNavigator
