import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, TouchableOpacity} from 'react-native';
//formik
import { Formik } from 'formik';

import {
    StyledContainer,
    InnerContainer,
    PageLogoSignup,
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
    TextLinkContent,
    Line,
} from './../components/styles'

//icons
import {Octicons, Ionicons} from '@expo/vector-icons';

//colors
const {primary,secondary} = Colors

import axios from 'axios';

import KeyboardAvoidingWrapper from '../components/keyboardAvoidingWrapper';

//datetimepicker
import DateTimePicker from '@react-native-community/datetimepicker'

const Signup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const[date, setDate] = useState(new Date(2000,0,1));
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();

    //Actual date of birth to be sent
    const [dob, setDob] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    }

    const showDatePicker = () => {
        setShow(true);
    }



    const handleSignup = (credentials) => {
        handleMessage(null)
        const url = 'https://secure-forest-32038.herokuapp.com/signup'
        axios.post(url, credentials)
        .then((response)=>{
            const result = response.data;
            const {message, status, data} = result;
            if (status !== "SUCCESS"){
                handleMessage(message,status);
            } else{
                navigation.navigate("Welcome", {...data});
            }
        })
        .catch(error => {
            console.log(error.JSON());
            handleMessage("An error occurred. Check your network and try again!")
        })
    }

    const handleMessage = (message, type = 'FAILED') => {
        setMessage(message);
        setMessageType(type);
    }


    return(
       <KeyboardAvoidingWrapper> 
        <StyledContainer>
            <StatusBar style = "dark" />
            <InnerContainer>
                <PageLogoSignup resizeMode="cover" source = {require('./../assets/drplogo.png')} />
                <Line></Line>

            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={'date'}
                is24Hour={true}
                display="default"
                onChange={onChange}
                />
            )}
            <Formik
                initialValues={{name: '',email: '', dateOfBirth: '', password: '', confirmPassword: ''}}
                onSubmit={(values) => {
                    values = {...values, dateOfBirth: dob};
                    if(values.email == '' || 
                    values.password == '' || 
                    values.dateOfBirth == '' || 
                    values.confirmPassword == '' || 
                    values.name == '') {
                        handleMessage('Please fill all fields');
                    } else if(values.password != values.confirmPassword){
                        handleMessage('Passwords do not match');
                    } else {
                        handleSignup(values);
                    }
                }}
            >{({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                <MyTextInput
                    label = "Full Name"
                    placeholder = "John Doe"
                    placeholderTextColor={'#9CA3AF'}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                />
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
                    label = "Date of Birth"
                    placeholder = "YYYY - MM - DD"
                    placeholderTextColor={'#9CA3AF'}
                    onChangeText={handleChange('dateOfBirth')} 
                    onBlur={handleBlur('dateOfBirth')}
                    value={dob ? dob.toDateString() : ''}
                    isDate={true}
                    editable={false}
                    showDatePicker={showDatePicker}
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

                <MyTextInput
                    label = "Confirm Password"
                    placeholder = "* * * * * * * * *"
                    placeholderTextColor={'#9CA3AF'}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
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
                    <ExtraText>Already have an account ? </ExtraText>
                    <TextLink onPress={() => navigation.navigate('Login')} >
                        <TextLinkContent>Login</TextLinkContent>
                    </TextLink>
                </ExtraView>
            </StyledFormArea>)}

            </Formik>
            </InnerContainer>
        </StyledContainer>
    </KeyboardAvoidingWrapper>
    );
}

const MyTextInput = ({label, icon,isPassword,hidePassword,setHidePassword,
    isDate,showDatePicker, ...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={secondary} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate && <StyledTextInput {...props}/>}
            {isDate && <TouchableOpacity onPress={showDatePicker}>
                <StyledTextInput {...props}/>
                </TouchableOpacity>}
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={'#9CA3AF'}/>
                </RightIcon>
            )}
        </View>);
}

export default Signup;