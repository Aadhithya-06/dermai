import { StyleSheet, Text, View, TouchableOpacity, Image,TextInput, Alert} from 'react-native'
import React, {useState,useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'
import axios from 'axios'
import {Fontisto, Entypo, Ionicons} from "@expo/vector-icons"
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
} from '../../../components/styles'

const MonthQuiz = ({navigation, route}) => {

    const [images, setImages] = useState(null);
    const [images2, setImages2] = useState(null);
    const [quizType, setQuizType] = useState(null);
    const [marks, setMarks] = useState(0);
    const [questions, setQuestions] = useState(0);
    const [condition, setConditions] = useState(0);
    // const {name, email} = route.params
  
    const getPicture = async () => {
               const url = 'https://secure-forest-32038.herokuapp.com/excema'
               axios.post(url).then((response) =>{
                 const result = response.data;
                 const {message, status, image1, image2, quizType, condition} = result;
                 if (status !== "SUCCESS"){
                    console.log(message)
                 } else{
                   setImages(image1)
                   setImages2(image2);
                   setQuizType(quizType);
                   setConditions(condition);
                }
             })
           }

    useEffect(() => {
         getPicture();
    }, [questions])


      return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={tw `font-bold text-center py-28 text-4xl`}>What condition is this? {questions}/5</Text>

        <View style={{bottom: 100,  backgroundColor: '#FFFFFF', width: 325, height: 500}}>
            <Image style={{width: "60%", height: '45%', top:0, left: 60}}
                    source={{uri: images}}/>
        </View>  

        <View style={styles.textAreaContainer}>
        <Formik
                initialValues={{diagnosis: ''}}
                onSubmit={(values) => {
                    if(values.diagnosis == '') {
                        Alert.alert("We cannot have an empty field", 'Please fill the diagnosis');
                    } else {
                      if (condition == 0) {
                        if(values.diagnosis.toLowerCase=="excema") {
                          setMarks(marks+1);
                        }
                        setQuestions(questions + 1);
                      }
                      
                    }
                }}
            >{({handleChange,handleBlur,handleSubmit, values}) => (<StyledFormArea>
                <MyTextInput
                    placeholder = "Enter information about your observations"
                    placeholderTextColor={'#9CA3AF'}
                    onChangeText={handleChange('diagnosis')}
                    onBlur={handleBlur('diagnosis')}
                    value={values.diagnosis}
                />
                <StyledButton style={styles.buttons} 
                                  onPress={handleSubmit}>
                    <ButtonText>
                        Submit Answer
                    </ButtonText>
                </StyledButton>
            </StyledFormArea>)}

            </Formik>
        </View>

        <View style={{bottom:50}}>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate("QuizLanding",route.params)}>
          <Entypo name="home" size={45} /> 
          <Text style={[tw `font-semibold right-3`]}>Main Menu</Text>
        </TouchableOpacity>  
        </View>
        </View>
      )

}

const styles = StyleSheet.create({
    textAreaContainer: {
      borderColor: "#000000",
      borderWidth: 2,
      padding: 5,
      width: 350,
      top: -350
    },
    textArea: {
      height: 50,
      justifyContent: "flex-start"
    },
    button:{
        top:-115,
        alignContent:'center',
        left: 10
    },
    buttons:{
        top: 100,
        left: 10
    }
  })

  const MyTextInput = ({label, icon,isPassword,hidePassword,setHidePassword, ...props}) => {
    return(
        <View style={styles.textArea}>
            <LeftIcon>
            </LeftIcon>
            <TextInput {...props}/>
        </View>);
}

export default MonthQuiz