import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, SafeAreaView} from 'react-native';
//formik
import { Formik } from 'formik';

import {
    StyledContainer,
    InnerContainer,
    PageLogoLogin,
    StyledFormArea,
    StyledInputLabel,
    LeftIcon,
    RightIcon,
    StyledTextInput,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent
} from './../components/styles'

//icons
import {Octicons, Ionicons} from '@expo/vector-icons';

//colors
const {primary,secondary} = Colors

//API
import axios from 'axios';

import KeyboardAvoidingWrapper from '../components/keyboardAvoidingWrapper';

const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();

    const handleLogin = (credentials) => {
        handleMessage(null)
        const url = 'https://secure-forest-32038.herokuapp.com/signin'
        axios.post(url, credentials)
        .then((response)=>{
            const result = response.data;
            const {message, status, data} = result;
            if (status !== "SUCCESS"){
                handleMessage(message,status);
            } else{
                navigation.navigate("Welcome", {...data[0]});
            }
        })
        .catch(error => {
            // console.log(error);
            navigation.navigate("Welcome", " ");
            // handleMessage("An error occurred. Check your network and try again!")
        })
    }

    const handleMessage = (message, type = 'FAILED') => {
        setMessage(message);
        setMessageType(type);
    }

    return(
        <KeyboardAvoidingWrapper><StyledContainer>
            <StatusBar style = "dark" />
            <InnerContainer>
                <PageLogoLogin resizeMode="cover" source = {require('./../assets/drplogo1.png')} />
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={(values) => {
                    if(values.email == '' || values.password == '') {
                        handleMessage('Please fill all fields');
                    } else {
                        handleLogin(values);

                    }
                }}
            >{({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                <MyTextInput
                    label = "Email Address"
                    placeholder = "andyj@gmail.com"
                    placeholderTextColor={'#9CA3AF'}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                />
                <MyTextInput
                    label = "Password"
                    placeholder = "* * * * * * * * *"
                    placeholderTextColor={'#9CA3AF'}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                />
                <MsgBox type={messageType}>{message}</MsgBox>
                <StyledButton onPress={handleSubmit}>
                    <ButtonText>
                        Login
                    </ButtonText>
                </StyledButton>
                <ExtraView>
                    <ExtraText>Don't have an account already? </ExtraText>
                    <TextLink onPress={() => navigation.navigate("Signup")}>
                        <TextLinkContent>Signup</TextLinkContent>
                    </TextLink>
                </ExtraView>
            </StyledFormArea>)}

            </Formik>
            </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
}

const MyTextInput = ({label, icon,isPassword,hidePassword,setHidePassword, ...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={secondary} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={'#9CA3AF'}/>
                </RightIcon>
            )}
        </View>);
}

export default Login;