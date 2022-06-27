import { StyleSheet, Text, View, TouchableOpacity, Image,TextInput} from 'react-native'
import React, {useState,useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'
import axios from 'axios'
import {Fontisto, Entypo, Ionicons} from "@expo/vector-icons"
import { Formik } from 'formik';
import Button from '../../components/Button';
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
} from './../../components/styles'

const SubmitDetails = ({navigation, route}) => {

    const [diagnosis, setDiagnosis] = useState("");
    const [images, setImages] = useState(null);
    const {name, email} = route.params


    const getPicture = async () => {
        const credentials = {email: email}
        const url = 'https://secure-forest-32038.herokuapp.com/results'
        axios.post(url,credentials).then((response) =>{
          const result = response.data;
          const {message, status, data} = result;
          if (status !== "SUCCESS"){
             console.log(status)
          } else{
              setImages(data)
           }
      }).catch(() => {})
    }

    useEffect(() => {
         getPicture();
    }, [])

      return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={[tw `font-bold text-center py-28 text-3xl`, {top: -50}]}>Optional Details Form</Text>
            <Image style={{width: 195, height: 225, top:-150, left: 0}} source={{uri: images}}/>

            <View style={[{bottom: 100}, styles.textAreaContainer]}>
                <Text style={{bottom:50, left:10 }}>Do you have additional details you want to disclose?</Text>
                <Formik initialValues={{diagnosis: ''}} onSubmit={(values) => { }}>

                {({handleChange,handleBlur,handleSubmit, values}) => (
                    <StyledFormArea>
                        <MyTextInput
                            placeholder = "duration / locality / severity of condition"
                            placeholderTextColor={'#9CA3AF'}
                            onChangeText={handleChange('diagnosis')}
                            onBlur={handleBlur('diagnosis')}
                            value={values.diagnosis}/>
                    </StyledFormArea>)}
                </Formik>
            </View>
            
            <View>
                {/* add to database */}
                <TouchableOpacity style={[{ bottom: 80 }, styles.buttonBlack ]}
                                onPress={() => navigation.navigate("Results", route.params)}>
                            <Text style={tw `font-semibold text-center text-xl text-white`}>Submit Optional Details</Text>
                </TouchableOpacity>
                <Text style={{bottom:70, left:120 }}>Don't have details to submit?</Text>
                <TouchableOpacity style={[{ bottom: 60 }, styles.buttonBlack ]}
                                onPress={() => navigation.navigate("Results", route.params)}>
                            <Text style={tw `font-semibold text-center text-xl text-white`}>Get Results</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[tw `absolute left-8 items-center`, {left: 0,right: 0,top:100}]}
                        onPress={() => navigation.navigate("Welcome",route.params)}>
                    <Entypo name="home" size={45} /> 
                    <Text style={tw `font-semibold`}>Main Menu</Text>
                </TouchableOpacity> 
            </View>
        </View>
      )

}


const MyTextInput = ({label, icon,isPassword,hidePassword,setHidePassword, ...props}) => {
    return(
        <View style={styles.textArea}>
            <TextInput {...props}/>
        </View>);
}

export default SubmitDetails

const styles = StyleSheet.create({
    textAreaContainer: {
        borderColor: "#000000",
        borderWidth: 2,
        padding: 5,
        width: 350,
      },
      textArea: {
        height: 150,
        justifyContent: "flex-start"
      },
    buttonGrey: {
        justifyContent: 'center', 
        width: 320, 
        height: 60, 
        backgroundColor: "#888888", 
        borderRadius: 10, 
        marginHorizontal : "15%"
    },
    buttonBlack: {
        justifyContent: 'center', 
        width: 320, 
        height: 60, 
        backgroundColor: "#000000", 
        borderRadius: 10, 
        marginHorizontal : "15%", 
    }, 
    button:{
        top:-30,
        alignContent:'center',
        left: 0, 
        right: 0
        // left: 10
    },
    buttons:{
        top: 100,
        left: 10
    }
});