import { StyleSheet, Text, SafeAreaView, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/core'

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={tw `items-center bg-black h-1/2`}>
        <Image
           style={{
            width:500,
            height:500,
            resizeMode: 'contain',
          }} 
          source={require('../photos/drplogo1.png')}>

        </Image>
      </View>

      <View style={tw `h-1/2`}>
        <Text style={tw `font-bold text-center py-20 text-4xl`}>Login</Text>

        <TextInput
          style={{height: 45,width: "60%",borderColor: "gray",borderWidth: 2, left: 80, bottom: 50}}
          placeholder="Username"          
          secureTextEntry={false}
      />

        <TextInput
          style={{height: 45,width: "60%",borderColor: "gray",borderWidth: 2, left: 80, bottom: 40}}
          placeholder="Password"          
          secureTextEntry={true}
        />

        <TouchableOpacity style={[
                              tw `absolute bottom-12 w-40 bg-black p-2 rounded-2xl`,
                              {marginHorizontal : "30%"}]}
                          onPress={() => navigation.navigate("Textbox")}>
          <Text style={tw `font-semibold text-center text-2xl text-white`}>Submit</Text>
        </TouchableOpacity>   
      </View>


    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})