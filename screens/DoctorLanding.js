import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'


const DoctorLanding = ({navigation, route}) => {
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

      <View style={tw `h-1/2 items-center`}>
        <TouchableOpacity style={[
                              tw `absolute bottom-72 w-80 bg-black p-4 rounded-2xl`,
                              {marginHorizontal : "25%"}]}
                          onPress={() => navigation.navigate("DocRecords", route.params)}>
          <Text style={tw `font-semibold text-center text-xl text-white`}>My Patient Records</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={[
                              tw `absolute bottom-36 w-44 bg-black p-4 rounded-2xl`,
                              {marginHorizontal : "15%"}]}
                          onPress={() => navigation.navigate("Welcome", route.params)}>
          <Text style={tw `font-semibold text-center text-xl text-white`}>Take Dermatology Quiz</Text>
        </TouchableOpacity>        
      </View>
    </View>
  )
}

export default DoctorLanding

const styles = StyleSheet.create({})