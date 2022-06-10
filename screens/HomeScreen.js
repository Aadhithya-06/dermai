import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/core'

const HomeScreen = () => {
  const navigation = useNavigation(); 

  return (
    <View>
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
        <TouchableOpacity style={[
                              tw `absolute bottom-64 w-52 bg-black p-4 rounded-2xl`,
                              {marginHorizontal : "25%"}]}
                          onPress={() => navigation.navigate("Log")}>
          <Text style={tw `font-semibold text-center text-2xl text-white`}>Logging In</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={[
                              tw `absolute bottom-36 w-52 bg-black p-4 rounded-2xl`,
                              {marginHorizontal : "25%"}]}>
          <Text style={tw `font-semibold text-center text-2xl text-white`}>Sign Up</Text>
        </TouchableOpacity>        
      </View>
    </View>

  )
  
}

export default HomeScreen;


const styles = StyleSheet.create({})