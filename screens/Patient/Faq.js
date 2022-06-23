import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const Faq = ({navigation,route}) => {

  return (
    <View>
      <Text style={tw `font-bold text-center py-28 text-4xl`}>FAQs</Text>


      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{bottom: 50,  backgroundColor: '#FFFFFF', width: 300, height: 500}}>
          <Text style={tw `font-semibold top-4 text-left text-xl`}>Q) How does the app work?</Text>
          <Text style={tw `top-4 text-left text-lg`}>You can use the basic functionality of the app by clicking a picture of the skin condition and getting a diagnosis.</Text>

          <Text style={tw `font-semibold top-16 text-left text-xl`}>Q) Does the app store my data?</Text>
          <Text style={tw `top-16 text-left text-lg`}>You can change the image storage functionality from the settings page.</Text>

          <Text style={tw `font-semibold top-28 text-left text-xl`}>Q) Does the app provide a proper diagnosis?</Text>
          <Text style={tw `top-28 text-left text-lg`}>The app aims to provide a confirmatory or secondary diagnosis to help patients and doctors.</Text>
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

export default Faq

const styles = StyleSheet.create({})