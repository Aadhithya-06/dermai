import { StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import {AntDesign, FontAwesome5, Fontisto, Entypo, Ionicons} from "@expo/vector-icons"

const QuizLanding = ({navigation, route}) => {
  const date = new Number(new Date().toLocaleDateString().split("/")[1]).valueOf();

  return (
    <View>
         <View style={{height: 110, backgroundColor: "#000000"}}>
            <TouchableOpacity 
                style={[tw `absolute w-4 bg-black p-8 rounded-2xl left-40`, {marginHorizontal : "30%"}]}
                            onPress={() => navigation.navigate("Login", route.params)}>
                <Text style={tw `font-semibold text-center text-sm text-white`}>Log Out</Text>
            </TouchableOpacity>
           
            <Text style={[tw `font-bold text-center text-4xl`, {bottom:-50, color: "#ffffff"}]}>{"Dr. Daftary" || "Shrey Shh"}</Text>
        </View>
        
      <View style={tw `h-1/2 items-center`}>

        <TouchableOpacity style={[
                                {bottom: -50}, 
                                styles.buttonBlack
                            ]}
                          onPress={() => navigation.navigate("DoctorQuiz", route.params)}>
          <Text style={tw `font-semibold text-center text-xl text-white`}>Daily Quiz</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={[
                                {bottom: -60}, 
                                (date % 7 == 0) ? styles.buttonBlack : styles.buttonGrey
                            ]}
                          onPress={() =>{
                            if (date % 7 == 0) {
                                navigation.navigate("DoctorQuiz", route.params);
                            } else {
                                Alert.alert("You have already done this week's quiz");
                            }

                          }}>
          <Text style={tw `font-semibold text-center text-xl text-white`}>Weekly Quiz</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={[
                                {bottom: -70}, 
                                (date == 1) ? styles.buttonBlack : styles.buttonGrey
                            ]}
                            onPress={() =>{
                              if (date == 1) {
                                  navigation.navigate("DoctorQuiz", route.params);
                              } else {
                                  Alert.alert("You have already done this month's quiz");
                              }
                            }}>
          <Text style={tw `font-semibold text-center text-xl text-white`}>Monthly Quiz</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={[
                                {bottom: -80}, 
                                styles.buttonBlack
                            ]}
                          onPress={() => navigation.navigate("DoctorStats", route.params)}>
          <Text style={tw `font-semibold text-center text-xl text-white`}>View Quiz Statistics</Text>
        </TouchableOpacity>   
        
        <TouchableOpacity style={[tw `absolute items-center`, {left: 0, right: 0, top: "235%"}]}
                        onPress={() => navigation.navigate("DoctorLanding",route.params)}>
          <Entypo name="home" size={45} /> 
          <Text style={tw `font-semibold`}>Main Menu</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default QuizLanding

const styles = StyleSheet.create({
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
        marginHorizontal : "15%"
    }
});