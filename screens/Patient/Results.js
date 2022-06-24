import { StyleSheet, Text, View, TouchableOpacity, Image, Linking} from 'react-native'
import React, {useState,useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'
import {Fontisto, Entypo, Ionicons} from "@expo/vector-icons"

const Results = ({navigation,route}) => {

  const [images, setImages] = useState(null);
  const {name, email} = route.params

  return ( 
    <View>
      <Text style={tw `font-bold text-center py-28 text-4xl`}> Diagnosis Result</Text>


      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{bottom: 80,  backgroundColor: '#FFFFFFEC', width: 350, height: 550}}>
            <Text style={tw `font-semibold top-4 text-left text-xl`}>Name: Shrey Shah</Text>
            <Text style={tw `font-semibold top-4 text-left text-lg`}>Date: 16/06/22</Text>
            
            <TouchableOpacity style={tw `top-4`}>
              <Text style={tw `top-80 left-32 text-left text-xl`}>Normal Skin (90%)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={tw `bottom-4`}
                              onPress={() => Linking.openURL("https://www.nhs.uk/conditions/psoriasis/")}>
              <Text style={tw `top-80 left-32 text-left text-xl underline text-blue-900`}>Psoriasis (3%)</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL("https://www.nhs.uk/conditions/atopic-eczema/")}>
              <Text style={tw `top-80 left-32 text-left text-xl underline text-blue-900`}>Eczema (2%)</Text>
            </TouchableOpacity>

            
            <Image
              style={{
                width:350,
                height:220,
                resizeMode: 'contain',
              }} 
              source={require('./../../assets/Graph.png')}>
            </Image>
            <Image
              style={{
                top: 1,
                width:200,
                height:120,
                resizeMode: 'contain',
              }} 
              source={require('./../../assets/Dots.png')}>
            </Image>
            
        </View>  
      </View>

      <View>
        <TouchableOpacity style={[tw `absolute items-center`, {left: 15, top: -45}]}
                        onPress={() => navigation.navigate("Welcome",route.params)}>
          <Entypo name="home" size={45} /> 
          <Text style={tw `font-semibold`}>Main Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[tw `absolute items-center`, {left: 100, right: 100, top:-45}]}
                     onPress={() => navigation.navigate("Record",route.params)}>
          <Ionicons name="newspaper" size={45} />
          <Text style={tw `font-semibold`}>My Records</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[tw `absolute items-center`, {right: 15, top:-45}]}
                     onPress={() => Linking.openURL("https://www.nhsapp.service.nhs.uk/login")}>
          <Fontisto name="doctor" size={45} />
          <Text style={tw `font-semibold`}>NHS Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Results

const styles = StyleSheet.create({})
