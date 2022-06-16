import Constants from 'expo-constants';
import styled from 'styled-components'
import {View,Text,Image,TextInput,TouchableOpacity} from 'react-native';

const StatusBarHeight = Constants.statusBarHeight;
//colors
export const Colors = {
    primary: "#ffffff",
    secondary: "#000000",
    green: "#10B981",
    red: "#EF4444"
}

const {primary, secondary,green,red} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight - 50}px;
    background-color: ${primary};
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const PageLogoLogin = styled.Image`
    width: 500px;
    height: 500px;
`;

export const PageLogoSignup = styled.Image`
    width: 400px;
    height: 150px;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${secondary};
    padding: 10px;

    ${(props) => props.welcome && `
        margin-bottom: 5px;
        font-weight: normal;
    `}
`;

export const StyledFormArea = styled.View`
    width: 90%;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${primary};
    padding: 15px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${secondary};
`;

export const StyledInputLabel = styled.Text`
    color: ${secondary};
    font-size: 13px;
    text-align: left;

`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 29px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${secondary};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
    color: ${(props) => (props.type == 'SUCCESS' ? green : red)}
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${'#9CA3AF'};
    margin-vertical: 10px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${'#1F2937'};
    font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const TextLinkContent = styled.Text`
    color: ${'#6D28D9'};
    font-size: 15px;
`;

export const WelcomeContainer = styled(InnerContainer)`
    padding: 25px;
    paddig-top: 10px;
    justify-content: center;
`;

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    margin: auto;
    border-radius: 50px;
    border-width: 2px;
    border-color: ${secondary};
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const WelcomeImage = styled.Image`
    height: 400px;
    width: 400px;
`;