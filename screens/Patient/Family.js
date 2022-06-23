import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import { StatusBar } from 'expo-status-bar';

const Family = ({navigation, route}) => {

  const [input, setInput] = useState('Default Text');

  return (

    <View>
      <Text style={tw `font-bold text-center py-28 text-4xl`}>Family History</Text>
      <Text>{input}</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here!"
        onChangeText={input => setInput(input)}
      />

    </View>
  )
}

export default Family

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center',
  },
  input: {
    marginTop: '60%',
    height: 40,
    width: '80%',
  },
});