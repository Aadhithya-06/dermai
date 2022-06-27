import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import {AntDesign, FontAwesome5} from "@expo/vector-icons"

const RecordsLanding = ({navigation, route}) => {

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
          source={require('./../../../assets/drplogo1.png')}>
        </Image>

        <TouchableOpacity style={[
                              tw `absolute w-4 bg-black p-8 rounded-2xl left-40`,
                              {marginHorizontal : "30%"}]}
                          onPress={() => navigation.navigate("Login", route.params)}>
          <Text style={tw `font-semibold text-center text-sm text-white`}>Log Out</Text>
        </TouchableOpacity>
      </View>

      <View style={tw `h-1/2 items-center`}>
      <TouchableOpacity style={[
                              tw `w-80 bg-black p-4 rounded-2xl`,
                              {bottom: -20, marginHorizontal : "25%"}]}
                          onPress={() => navigation.navigate("DocRecords", route.params)}>
          <Text style={tw `font-semibold text-center text-xl text-white`}>Diagnoses To Confirm</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={[
                              tw `w-80 bg-black p-4 rounded-2xl`,
                              {bottom: -50, marginHorizontal : "15%"}]}
                          onPress={() => navigation.navigate("DocConfirmedRecords", route.params)}>
          <Text style={tw `font-semibold text-center text-xl text-white`}>Confirmed Diagnoses</Text>
        </TouchableOpacity>   
 
        
        <TouchableOpacity style={[tw `items-center`, {right:120, bottom: -117.5}]}>
          <AntDesign name="setting" size={45} /> 
          <Text style={tw `font-semibold`}>Settings</Text>
        </TouchableOpacity>      

        <TouchableOpacity style={[tw `items-center`, {right:0, bottom: -55}]}
                     onPress={() => navigation.navigate("DocFaq",route.params)}>
          <AntDesign name="question" size={45} />
          <Text style={tw `font-semibold`}>FAQs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[tw `items-center`, {right:-120, bottom: 7.5}]}
                     onPress={() => navigation.navigate("DocPrivacy",route.params)}>
          <FontAwesome5 name="user-lock" size={45} />
          <Text style={tw `font-semibold`}>User Privacy</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default RecordsLanding

const styles = StyleSheet.create({})