import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { StatusBar } from 'expo-status-bar';

const Family = ({navigation, route}) => {
  return (

    <View>
      <Text style={tw `font-bold text-center py-28 text-4xl`}>Family History</Text>
      <TextInput  />

    </View>
  )
}

export default Family

const styles = StyleSheet.create({})