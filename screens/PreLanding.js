import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import React from 'react'

const PreLanding = ({navigation, route}) => {

  const {name, email} = route.params

  return (
    <View>
      <View style={tw `items-center bg-black h-1/2`}>
        <Image
           style={{
            width:500,
            height:500,
            resizeMode: 'contain',
          }} 
          source={require('./../assets/drplogo1.png')}>
        </Image>

        <TouchableOpacity style={[
                              tw `absolute w-4 bg-black p-8 rounded-2xl left-40 bottom-80`,
                              {marginHorizontal : "30%"}]}
                          onPress={() => navigation.navigate("Login",route.params)}>
          <Text style={tw `font-semibold text-center text-sm text-white`}>Log Out</Text>
        </TouchableOpacity>
      </View>

      <View style={tw `h-1/2`}>
        <TouchableOpacity style={[
                              tw `w-52 absolute bottom-72 bg-black p-4 rounded-2xl`,
                              {marginHorizontal : "25%"}]}
                          onPress={() => navigation.navigate("DoctorLanding", route.params)}>
          <Text style={tw `font-semibold text-center text-2xl text-white`}>I'm A Doctor</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={[
                              tw `absolute bottom-36 w-52 bg-black p-4 rounded-2xl`,
                              {marginHorizontal : "25%"}]}
                          onPress={() => navigation.navigate("Welcome", route.params)}>
          <Text style={tw `font-semibold text-center text-2xl text-white`}>I'm A Patient</Text>
        </TouchableOpacity>        
      </View>
    </View>
  )
}

export default PreLanding

const styles = StyleSheet.create({})