import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const Record = ({navigation,route}) => {

  return (
    <View>
      <Text style={tw `font-bold text-center py-28 text-4xl`}>Records</Text>


      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{bottom: 50,  backgroundColor: '#ECECEC', width: 325, height: 500}}>
            <Text style={tw `font-semibold top-4 text-left text-xl`}>16/06/22:</Text>
            <Text style={tw `top-4 text-left text-lg`}>Probable Diagnosis: Psoriasis - 96%</Text>
            <Text style={tw `top-4 text-left text-lg`}>Other possible diagnosis: Keloids - 4%</Text>
        </View>   

        <View>
        <TouchableOpacity style={[
                              tw `bottom-0 w-48 bg-black right-0 rounded-2xl`,
                              {marginHorizontal : "2%"}]}
                           onPress={() => navigation.navigate("Welcome",route.params)}>
          <Text style={tw `font-semibold text-center text-2xl text-white`}>Main Menu</Text>
        </TouchableOpacity>     
        </View>
      </View>


    </View>
  )
}

export default Record

const styles = StyleSheet.create({})