import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const Security = ({navigation,route}) => {

  return (
    <View>
      <Text style={tw `font-bold text-center py-28 text-4xl`}>Security & Privacy</Text>


      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{bottom: 50,  backgroundColor: '#ECECEC', width: 300, height: 500}}>
          <Text style={tw `top-4 text-center text-lg`}>Information and content you provide: We collect the content, communications and other information you provide when you use our Products, including when you sign up for an account, create or share content and message or communicate with others. Networks and connections. We collect information about the people, accounts, hashtags, Facebook groups and Pages that you are connected to and how you interact with them across our Products, such as people you communicate with the most or groups that you are part of.</Text>
        </View>   

        <View>
        <TouchableOpacity style={[
                              tw `bottom-0 w-48 bg-black right-0 rounded-2xl p-4`,
                              {marginHorizontal : "2%"}]}
                           onPress={() => navigation.navigate("Welcome",route.params)}>
          <Text style={tw `font-semibold text-center text-2xl text-white`}>Main Menu</Text>
        </TouchableOpacity>     
        </View>
      </View>


    </View>
  )
}

export default Security

const styles = StyleSheet.create({})