import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import {AntDesign, FontAwesome5} from "@expo/vector-icons"


const DoctorLanding = ({navigation, route}) => {

  const {name, email} = route.params

  return (
    <View>
      <View style={tw `items-center bg-black h-1/2`}>
        <Image
           style={{
            width:500,
            height:530,
            resizeMode: 'contain',
          }} 
          source={require('./../../assets/drplogo1.png')}>
        </Image>

        <TouchableOpacity style={[
                              tw `absolute w-4 bg-black p-8 rounded-2xl left-40`,
                              {marginHorizontal : "30%"}]}
                          onPress={() => navigation.navigate("Login",route.params)}>
          <Text style={tw `font-semibold text-center text-sm text-white`}>Log Out</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={tw `font-bold text-center text-4xl top-8`}>{name || "Shrey Shah"}</Text>
      </View>

      <View style={tw `h-1/2 items-center`}>
        <TouchableOpacity style={[
                              tw `absolute bottom-80 w-80 bg-black p-4 rounded-2xl`,
                              {marginHorizontal : "25%"}]}
                          onPress={() => navigation.navigate("DocRecords", route.params)}>
          <Text style={tw `font-semibold text-center text-xl text-white`}>My Patient Records</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={[
                              tw `absolute bottom-48 w-44 bg-black p-4 rounded-2xl`,
                              {marginHorizontal : "15%"}]}
                          onPress={() => navigation.navigate("DoctorQuiz", route.params)}>
          <Text style={tw `font-semibold text-center text-xl text-white`}>Take Dermatology Quiz</Text>
        </TouchableOpacity>   
        
        <TouchableOpacity style={tw `absolute top-80 left-8 items-center`}>
          <AntDesign name="setting" size={45} /> 
          <Text style={tw `font-semibold`}>Settings</Text>
        </TouchableOpacity>      

        <TouchableOpacity style={tw `absolute top-80 left-44 items-center`}
                     onPress={() => navigation.navigate("DocFaq",route.params)}>
          <AntDesign name="question" size={45} />
          <Text style={tw `font-semibold`}>FAQs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw `absolute top-80 right-8 items-center`}
                     onPress={() => navigation.navigate("DocPrivacy",route.params)}>
          <FontAwesome5 name="user-lock" size={45} />
          <Text style={tw `font-semibold`}>User Privacy</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default DoctorLanding

const styles = StyleSheet.create({})