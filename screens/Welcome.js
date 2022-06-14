import React from 'react';
import { StatusBar } from 'expo-status-bar';


import {
    StyledContainer,
    InnerContainer,
    StyledFormArea,

    StyledButton,
    ButtonText,
    WelcomeContainer,
    WelcomeImage,
    Avatar,
    PageTitle,
    Line
} from './../components/styles'

const Welcome = ({navigation, route }) => {

    const {name, email} = route.params;

    return(
        <StyledContainer>
            <StatusBar style = "light" />
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source = {require('./../assets/drplogo1.png')} />
            <WelcomeContainer>
                <PageTitle welcome={true}>Welcome!</PageTitle>
            <StyledFormArea>
            <Avatar resizeMode="cover" source = {require('./../assets/drplogo.png')} />
            <Line/>
                <StyledButton onPress={() => {navigation.navigate('Login')}}>
                    <ButtonText>
                        Logout
                    </ButtonText>
                </StyledButton>
            </StyledFormArea>

            </WelcomeContainer>
            </InnerContainer>
        </StyledContainer>
    );
}

export default Welcome;