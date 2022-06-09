import { StyleSheet, Text, View,SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const ResultScreen = () => {

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
        <Text style={tw `font-bold text-center py-20 text-4xl`}>Result</Text> 
        <Text style={tw `font-bold text-center py-2 text-2xl`}>
            Probable Diagnosis: Psoriasis - 96%
        </Text> 
        <Text style={tw `font-bold text-center py-2 text-xl`}>
            Other possible diagnosis: Keloids - 4%
        </Text> 
      </View>


    </SafeAreaView>
  )
}

export default ResultScreen

const styles = StyleSheet.create({})