import { StyleSheet, Text, View, TouchableOpacity,Image, ImageEditor, Alert } from 'react-native'
import React, {useState,useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'


import axios from 'axios'
import { CardStyleInterpolators } from '@react-navigation/stack'
import {Fontisto, Entypo, Ionicons} from "@expo/vector-icons"


const MonthQuiz = ({navigation,route}) => {

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

  const hookMethod = async () => {
    setQuestions(questions+1);
    if(questions > 4) {
      // const res = marks;
      // const q = questions;
      const credentials = {score: String(marks)}
      const url = 'https://secure-forest-32038.herokuapp.com/quizSubmit'
      axios.post(url,credentials).then(()=>{}).catch(error => {});
      setQuestions(0);
      setMarks(0);
      navigation.navigate("DoctorStats", route.params);
    }
  }

   useEffect(() => {
          Alert.alert("Quiz Rules", "If you have the correct answer, we will go straight to the next questions. If you get a question wrong, you will be told what the correct answer is.");
          getPicture();
      }, [])

  // if quiztype is 0: what condition is it?
  // if quiztype is 1: are these the same condition?

    return ( 
      <View>
        <Text style={tw `font-bold text-center py-28 text-4xl`}>What condition are these? {questions}/5</Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={{bottom: 50, width: 375, height: 500}}>
              <Image  style={{width: "48%", height: '50%', top:40, left: 0}}
                      source={{uri: images}}/>
              <Image  style={{width: "48%", height: '50%', top:-210, left: 190}}
                      source={{uri: images2}}/>
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
                    placeholder = "Enter diagnosis of skin disease"
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




            {/* <TouchableOpacity style={{bottom: 290, left:80,  backgroundColor: '#000000', width: 150, height: 50, borderRadius:20}}
                             onPress={() => {
                            //   hookMethod();
                            //   if (condition == 0) {
                            //     Alert.alert("Incorrect Answer", "The answer is Eczema");
                            //   } else if (condition == 1){
                            //     Alert.alert("Incorrect Answer", "The answer is Psoriasis");
                            //   } else {
                            //     Alert.alert("Incorrect Answer", "The answer is Keloids");
                            //   }
                            //   getPicture();
                             }}>
              <Text style={tw `font-semibold text-center text-2xl text-white`}>Other</Text>
            </TouchableOpacity>  */}

            <TouchableOpacity style={[tw `absolute left-8 items-center`, {left: 0,right: 0,top:-35}]}
                        onPress={() => navigation.navigate("DoctorLanding",route.params)}>
          <Entypo name="home" size={45} /> 
          <Text style={tw `font-semibold`}>Main Menu</Text>
        </TouchableOpacity>  
          </View>
  
       </View>


   
    )
  
}

export default MonthQuiz

const styles = StyleSheet.create({})