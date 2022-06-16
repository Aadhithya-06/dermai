import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const Security = ({navigation}) => {
  return (
    <View style={tw `bg-white`}>
      <Text style={tw `font-bold text-center py-20 text-4xl`}>Security & Privacy</Text>


      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{bottom: 50,  backgroundColor: '#ECECEC', width: 300, height: 500}}>
          <Text style={tw `top-4 text-center text-3xl`}>Information and content you provide. We collect the content, communications and other information you provide when you use our Products, including when you sign up for an account, create or share content and message or communicate with others.</Text>
        </View>   


        <TouchableOpacity style={[
                              tw `absolute bottom-0 w-52 bg-white left-24`,
                              {marginHorizontal : "2%"}]}
                           onPress={() => navigation.navigate("Welcome")}>
          <Text style={tw `font-semibold text-center text-2xl text-black`}>Main Menu</Text>
        </TouchableOpacity>     
      </View>


    </View>
  )
}

export default Security

const styles = StyleSheet.create({})