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
          source={require('./../../assets/drplogo1.png')}>
        </Image>
      </View>

      <View style={tw `h-1/2`}>
      <TouchableOpacity style={[
                              tw `absolute w-52 bg-black p-8 rounded-2xl right-24 top-5`,
                              {marginHorizontal : "30%"}]}
                          onPress={() => navigation.navigate("DoctorRecord",route.params)}>
          <Text style={tw `font-semibold text-center text-xl text-white`}>Patient's Records</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={[
                              tw `absolute w-52 bg-black p-4 rounded-2xl left-24 top-5`,
                              {marginHorizontal : "30%"}]}
                              onPress={() => navigation.navigate("DoctorQuiz",route.params)}>
          <Text style={tw `font-semibold text-center text-xl text-white`}>Take Dermatology Quiz</Text>
        </TouchableOpacity>     

      </View>
    </View>
  )
}

export default DoctorLanding

const styles = StyleSheet.create({})