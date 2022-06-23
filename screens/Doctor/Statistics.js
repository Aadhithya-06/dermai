import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const DoctorStats = ({navigation, route}) => {
    const { questions, marks } = route.params;
    console.log(route.params);
    if(marks == undefined) {
        return (
          <View>
            <Text style={tw `font-bold text-center py-28 text-4xl`}> Statistics </Text>
            <Text style={tw `font-bold text-center py-28 text-4xl`}> You have not completed today's questions </Text>
          </View>
        )
        
    } else {
      return (
        <View>
          <Text style={tw `font-bold text-center py-28 text-4xl`}> Statistics </Text>
          <Text style={tw `font-bold text-center py-28 text-4xl`}> You got {marks} out of {questions} </Text>
        </View>
      )
    }

}

export default DoctorStats

const styles = StyleSheet.create({})