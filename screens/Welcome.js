import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/core'


const Welcome = ({navigation, route}) => {

  const {name, email} = route.params
  
  return (
    <View style={tw `bg-white`}>
      <Text style={tw `font-bold text-center py-20 text-4xl`}>{name || "Shrey Shah"}</Text>

      <View style={tw `h-1/2`}>
        <TouchableOpacity style={[
                              tw `absolute bottom-60 w-52 bg-black p-8 rounded-2xl right-20`,
                              {marginHorizontal : "30%"}]}
                          onPress={() => navigation.navigate("Record",route.params)}>
          <Text style={tw `font-semibold text-center text-2xl text-white`}>Records</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={[
                              tw `absolute bottom-60 w-52 bg-black p-4 rounded-2xl left-24`,
                              {marginHorizontal : "30%"}]}
                              onPress={() => navigation.navigate("Family",route.params)}>
                              
          <Text style={tw `font-semibold text-center text-2xl text-white`}>Family History</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={[
                              tw `absolute bottom-32 w-52 bg-black p-6 rounded-2xl left-24`,
                              {marginHorizontal : "2%"}]}
                              onPress={() => navigation.navigate("CameraPage",route.params)}>
          <Text style={tw `font-semibold text-center text-2xl text-white`}>Upload Picture</Text>
        </TouchableOpacity>        
      </View>


      <View style={tw `bg-white`, {bottom: 40, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{ backgroundColor: '#ECECEC', width: 300, height: 150}}>
          <Text style={tw `font-semibold text-center text-xl`}>Daily skin hygiene tip: </Text>
          <Text style={tw `top-4 text-center text-lg`}>Ensure that skin is properly disinfected after a cut from any metallic/wooden object.</Text>
        </View>   


        <TouchableOpacity style={[
                              tw `absolute top-48 w-52 bg-white left-24`,
                              {marginHorizontal : "2%"}]}>
          <Text style={tw `font-semibold text-center text-xl text-black`}>Settings</Text>
        </TouchableOpacity>   

        <TouchableOpacity style={[
                              tw `absolute top-60 w-52 bg-white left-24`,
                              {marginHorizontal : "2%"}]}
                              onPress={() => navigation.navigate("Faq",route.params)}>
          <Text style={tw `font-semibold text-center text-xl text-black`}>FAQs</Text>
        </TouchableOpacity>  

        <TouchableOpacity style={[
                              tw `absolute top-72 w-52 bg-white left-24`,
                              {marginHorizontal : "2%"}]}
                          onPress={() => navigation.navigate("Security",route.params)}
                          >
          <Text style={tw `font-semibold text-center text-xl text-black`}>Security & Privacy</Text>
        </TouchableOpacity>      
      </View>


    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})