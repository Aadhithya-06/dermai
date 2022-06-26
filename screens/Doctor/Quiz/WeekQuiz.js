import { StyleSheet, Text, View, TouchableOpacity,Image, ImageEditor, Alert } from 'react-native'
import React, {useState,useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'


import axios from 'axios'
import { CardStyleInterpolators } from '@react-navigation/stack'
import {Fontisto, Entypo, Ionicons} from "@expo/vector-icons"


const WeekQuiz = ({navigation,route}) => {

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
               const {message, status, image1, image2, quizType} = result;
               if (status !== "SUCCESS"){
                  console.log(message)
               } else{
                 setImages(image1)
                 setImages2(image2);
                 setQuizType(quizType);
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
  if (quizType == 0) {
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
          

          <View> 
            <TouchableOpacity style={{bottom: 220, left:-90,  backgroundColor: '#000000', width: 150, height: 50, borderRadius:20}}
                             onPress={() => {
                              setMarks(marks + 1);
                              hookMethod();
                              getPicture();
                             }}>
              <Text style={tw `font-semibold text-center text-2xl text-white`}>Eczema</Text>
            </TouchableOpacity>  

            <TouchableOpacity style={{bottom: 270, left:80,  backgroundColor: '#000000', width: 150, height: 50, borderRadius:20}}
                             onPress={() => {
                              hookMethod();
                              Alert.alert("Incorrect Answer", "The answer is Eczema");
                              getPicture();
                             }}>
              <Text style={tw `font-semibold text-center text-2xl text-white`}>Psoriasis</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={{bottom: 240, left:-90,  backgroundColor: '#000000', width: 150, height: 50, borderRadius:20}}
                             onPress={() => {
                              hookMethod();
                              Alert.alert("Incorrect Answer", "The answer is Eczema");
                              getPicture();
                             }}>
              <Text style={tw `font-semibold text-center text-2xl text-white`}>Keloids</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={{bottom: 290, left:80,  backgroundColor: '#000000', width: 150, height: 50, borderRadius:20}}
                             onPress={() => {
                              hookMethod();
                              Alert.alert("Incorrect Answer", "The answer is Eczema");
                              getPicture();
                             }}>
              <Text style={tw `font-semibold text-center text-2xl text-white`}>Other</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={[tw `absolute left-8 items-center`, {left: 0,right: 0,top:-35}]}
                        onPress={() => navigation.navigate("DoctorLanding",route.params)}>
          <Entypo name="home" size={45} /> 
          <Text style={tw `font-semibold`}>Main Menu</Text>
        </TouchableOpacity>  
          </View>
  
       </View>

    </View> 
   
    )
  } else {
    return (
      <View>
      <Text style={tw `font-bold text-center py-28 text-4xl`}>Are these the same condition? {questions}/5</Text>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{bottom: 50,  backgroundColor: '#FFFFFF', width: 375, height: 500}}>
            <Image  style={{width: "48%", height: '50%', top:40, left: 0}}
                    source={{uri: images}}/>
            <Image  style={{width: "48%", height: '50%', top:-210, left: 190}}
                    source={{uri: images2}}/>
        </View>  
   

        <View> 
        <TouchableOpacity style={{bottom: 240, left:-100,  backgroundColor: '#000000', width: 150, height: 50, borderRadius:20}}
                             onPress={() => {
                              setMarks(marks + 1);
                              hookMethod();
                              getPicture();
                             }}>
              <Text style={tw `font-semibold text-center text-2xl text-white`}>Yes</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={{bottom: 290, left:100,  backgroundColor: '#000000', width: 150, height: 50, borderRadius:20}}
                             onPress={() => {
                              hookMethod();
                              Alert.alert("Incorrect Answer", "These are both examples of Eczema");
                              getPicture();
                             }}>
              <Text style={tw `font-semibold text-center text-2xl text-white`}>No</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={[tw `absolute left-8 items-center`, {left: 0,right: 0,top:-35}]}
                        onPress={() => navigation.navigate("DoctorLanding",route.params)}>
          <Entypo name="home" size={45} /> 
          <Text style={tw `font-semibold`}>Main Menu</Text>
        </TouchableOpacity>  
        </View>

     </View>

  </View>  

    )
  }
  
}

export default WeekQuiz

const styles = StyleSheet.create({})