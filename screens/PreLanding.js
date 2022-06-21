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
      </View>

      <View style={tw `h-1/2`}>
        <TouchableOpacity style={[
                              tw `absolute bottom-72 w-52 bg-black p-4 rounded-2xl`,
                              {marginHorizontal : "25%"}]}
                          onPress={() => navigation.navigate("DoctorLanding", route.params)}>
          <Text style={tw `font-semibold text-center text-2xl text-white`}>I'm A Doctor/NHS Staff</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={[
                              tw `absolute bottom-36 w-52 bg-black p-4 rounded-2xl`,
                              {marginHorizontal : "25%"}]}
                          onPress={() => navigation.navigate("Welcome", route.params)}>
          <Text style={tw `font-semibold text-center text-2xl text-white`}>I'm A User</Text>
        </TouchableOpacity>        
      </View>
    </View>
  )
}

export default PreLanding

const styles = StyleSheet.create({})