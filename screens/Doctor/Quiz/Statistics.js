import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState,useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'
import axios from 'axios'
import {Fontisto, Entypo, Ionicons} from "@expo/vector-icons"


const DoctorStats = ({navigation, route}) => {
    const [marks, setMarks] = useState("");
    const questions = 5;
    const url = 'https://secure-forest-32038.herokuapp.com/quizGet';
    console.log(marks);
    axios.post(url).then(response => {
      const {quiz} = response.data;
      setMarks(quiz);
    });

    if(marks == undefined) {
        return (
          <View>
            <Text style={tw `font-bold text-center py-28 text-4xl`}> Statistics </Text>
            <Text style={tw `font-bold text-center py-28 text-4xl`}> You have not completed today's questions </Text>
          </View>
        )
        
    } else {
      return (
        <View>
        <View>
          <Text style={tw `font-bold text-center py-28 text-4xl`}> Statistics </Text>
          <Text style={tw `font-bold text-center py-28 text-4xl`}> You got {marks} out of {questions} </Text>
        </View>
        <View>
          <TouchableOpacity style={[tw `absolute left-8 items-center`, {left: 0,right: 0,top:230}]}
                          onPress={() => navigation.navigate("DoctorLanding",route.params)}>
            <Entypo name="home" size={45} /> 
            <Text style={tw `font-semibold`}>Main Menu</Text>
          </TouchableOpacity>  
        </View>
        </View>
      )
    }

}

export default DoctorStats

const styles = StyleSheet.create({})