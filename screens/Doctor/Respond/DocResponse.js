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

const DocResponse = ({navigation, route}) => {

    const [diagnosis, setDiagnosis] = useState("");
    const [images, setImages] = useState(null);
    const {name, email} = route.params;

    const confirmDiagnosis = async () => {
        const url = 'https://secure-forest-32038.herokuapp.com/diagnosisConfirmed'
        const credentials = {email:email,confirmed: true}
        axios.post(url,credentials).then((response)=>{
            const result = response.data;
            const {message, status, data} = result;
        }).catch(error => {
            console.log(error)
        });
    }


    const approveDiagnosis = async () => {
        const url = 'https://secure-forest-32038.herokuapp.com/doctorDiagnosis'
        const credentials = {email:email,correct: true}
        axios.post(url,credentials).then((response)=>{
            const result = response.data;
            const {message, status, data} = result;
            if (status !== "SUCCESS"){
                Alert.alert("Could not upload!","Try again")
                console.log(status)
            } else{
                Alert.alert("Diagnosis successfully sent!")
                confirmDiagnosis();
                navigation.navigate("RecordsLanding", route.params)            
            }
        }).catch(error => {
            console.log(error)
        });
    }

    const disapproveDiagnosis = async () => {
        const url = 'https://secure-forest-32038.herokuapp.com/doctorDiagnosis'
        const credentials = {email:email,correct: false}
        axios.post(url,credentials).then((response)=>{
            const result = response.data;
            const {message, status} = result;
            console.log(message)
            if (status !== "SUCCESS"){
                console.log(status)
            } else{
                Alert.alert("Diagnosis successfully sent!")
                confirmDiagnosis();
                navigation.navigate("RecordsLanding", route.params)            
            }
        }).catch(error => {            
            console.log(error)        
        });
    }

    const sendDiagnosis = async () => {
        const url = 'https://secure-forest-32038.herokuapp.com/opinionCollect'
        const credentials = {email:email,diagnosis: diagnosis}
        axios.post(url,credentials).then((response)=>{
            const result = response.data;
            const {message, status, data} = result;
            if (status !== "SUCCESS"){
                console.log(status)
                Alert.alert("Could not upload!","Try again")
            } else{
                Alert.alert("Additional information successfully sent!")           
            }
            
        }).catch(error => {
            console.log(error)
        });
    }

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
        <View style={{bottom: 50,  backgroundColor: '#FFFFFF', width: 325, height: 500}}>
            <Image  style={{width: "60%", height: '45%', top:150, left: 60}}
                    source={{uri: images}}/>
        </View>  

        <View style={styles.textAreaContainer} >
        <Formik
                initialValues={{diagnosis: ''}}
                onSubmit={(values) => {
                    if(values.diagnosis == '') {
                        Alert.alert("We cannot have an empty field", 'Please fill the diagnosis');
                    } else {
                        setDiagnosis(values.diagnosis);
                        sendDiagnosis()
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
                        Send diagnosis
                    </ButtonText>
                </StyledButton>
            </StyledFormArea>)}

            </Formik>
        </View>

        <View>
            <Text style={[tw `font-bold text-center py-10 text-2xl`, {top:-70}]}>Do you confirm our diagnosis: No skin anomaly?</Text>
        </View>

        <StyledButton style={{bottom: 90, left:-90,  backgroundColor: '#000000', width: 150, height: 60}}
                             onPress={() => {approveDiagnosis()}}>
              <ButtonText style={tw `font-semibold text-center text-2xl text-white`}>Yes</ButtonText>
            </StyledButton>  

            <StyledButton style={{bottom: 160, left:80,  backgroundColor: '#000000', width: 150, height: 60}}
                            onPress={() => {disapproveDiagnosis()}}>
              <ButtonText style={tw `font-semibold text-center text-2xl text-white`}>No</ButtonText>
            </StyledButton> 


        <View>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate("DoctorLanding",route.params)}>
          <Entypo name="home" size={45} /> 
          <Text style={tw `font-semibold right-3` }>Main Menu</Text>
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
      top: -150
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

export default DocResponse