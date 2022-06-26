import React from "react";

import { Colors } from "../components/styles";

const {primary, secondary} = Colors;

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from './../screens/Login'
import Signup from './../screens/Signup'
import Welcome from './../screens/Patient/Welcome'
import CameraPage from "../screens/Patient/CameraPage"
import SubmitDetails from "../screens/Patient/SubmitDetails"
import Security from './../screens/Patient/Security'
import Faq from './../screens/Patient/Faq'
import DocFaq from './../screens/Doctor/DocFaq'
import Family from '../screens/Patient/Family'
import Results from './../screens/Patient/Results'
import Record from '../screens/Patient/Record'
import PreLanding from './../screens/PreLanding'
import DoctorLanding from './../screens/Doctor/Landing'
import DocRecords from "../screens/Doctor/Respond/Records";
import RecordsLanding from "../screens/Doctor/Respond/RecordsLanding";
import DoctorQuiz from "../screens/Doctor/Quiz/Quiz"
import DocPrivacy from "../screens/Doctor/DocPrivacy"
import DoctorStats from "../screens/Doctor/Quiz/Statistics"
import DocResponse from "../screens/Doctor/Respond/DocResponse";
import QuizLanding from "../screens/Doctor/Quiz/QuizLanding";
import Study from '../screens/Doctor/Study/Study'
import MoreConditions from '../screens/Doctor/Study/MoreConditions'

const Stack = createStackNavigator();


const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(255, 255, 255)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

const RootStack = () => {
    return(
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator
                 screenOptions={{
                    headerStyled:{
                        backgroundColor: '#FFFFFF'
                    },
                
                    headerTintColor: primary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20
                    }
                }} 
                initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Signup" component={Signup}/>

                { <Stack.Screen name = "CameraPage" component={CameraPage}/>}

                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Security" component={Security}/>
                <Stack.Screen name="Faq" component={Faq}/>
                <Stack.Screen name="DocFaq" component={DocFaq}/>
                <Stack.Screen name="DocPrivacy" component={DocPrivacy}/>
                <Stack.Screen name="Family" component={Family}/>
                <Stack.Screen name="Results" component={Results}/>
                <Stack.Screen name="Record" component={Record}/>
                <Stack.Screen name="PreLanding" component={PreLanding}/>
                <Stack.Screen name="DoctorLanding" component={DoctorLanding}/>
                <Stack.Screen name="DocRecords" component={DocRecords}/>
                <Stack.Screen name="DocResponse" component={DocResponse}/>
                <Stack.Screen name="DoctorQuiz" component={DoctorQuiz}/>
                <Stack.Screen name="DoctorStats" component={DoctorStats}/>
                <Stack.Screen name="SubmitDetails" component={SubmitDetails}/>
                <Stack.Screen name="QuizLanding" component={QuizLanding}/>
                <Stack.Screen name="Study" component={Study}/>
                <Stack.Screen name="MoreConditions" component={MoreConditions}/>
                <Stack.Screen name="RecordsLanding" component={RecordsLanding}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;