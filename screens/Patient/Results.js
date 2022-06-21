import { StyleSheet, Text, View,SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const Results = ({navigation,route}) => {

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

      <View>
        <Text style={tw `font-bold text-center py-20 text-4xl`}>Result</Text> 
        <Text style={tw `font-bold text-center py-0 text-2xl`}>
            Probable Diagnosis: Psoriasis - 96%
        </Text> 
        <Text style={tw `font-bold text-center py-12 text-xl`}>
            Other possible diagnosis: Keloids - 4%
        </Text> 

        <TouchableOpacity style={[
                              tw `bottom-0 w-48 bg-black left-28 rounded-2xl p-4`,
                              {marginHorizontal : "2%"}]}
                           onPress={() => navigation.navigate("Welcome",route.params)}>
          <Text style={tw `font-semibold text-center text-2xl text-white`}>Main Menu</Text>
        </TouchableOpacity> 
      </View>
    </View>
  )
}

export default Results

const styles = StyleSheet.create({})