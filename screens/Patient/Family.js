import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Formik } from 'formik';
import KeyboardAvoidingWrapper from '../../components/keyboardAvoidingWrapper';
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
} from '../../components/styles'
import { StatusBar } from 'expo-status-bar';

const Family = ({navigation, route}) => {
  return (

    <View>
      <Text style={tw `font-bold text-center py-28 text-4xl`}>Family History</Text>

      <KeyboardAvoidingWrapper><StyledContainer>
            <StatusBar style = "dark" />
            <InnerContainer>
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={(values) => {
                    if(values.email == '' || values.password == '') {
                        handleMessage('Please fill all fields');
                    } else {
                        handleLogin(values);

                    }
                }}
            >{({}) => (<StyledFormArea>
                <TextInput
                    label = "Family condition"
                    placeholder = "Enter family conditon"
                    placeholderTextColor={'#9CA3AF'}
                    keyboardType="email-address"
                />
                <TextInput

                />

                <TouchableOpacity style={[
                              tw `bottom-0 w-48 bg-black right-0 rounded-2xl`,
                              {marginHorizontal : "2%"}]}
                           onPress={() => navigation.navigate("Welcome",route.params)}>
                    <Text style={tw `font-semibold text-center text-2xl text-white`}>Main Menu</Text>
                </TouchableOpacity>     

            </StyledFormArea>)}

            </Formik>
            </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    </View>
  )
}

export default Family

const styles = StyleSheet.create({})