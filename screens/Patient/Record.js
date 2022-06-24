import { StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native'
import React, {useState,useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'
import {Fontisto, Entypo, Ionicons} from "@expo/vector-icons"
import axios from 'axios'

const Record = ({navigation,route}) => {

  const [images, setImages] = useState(null);
  const {name, email} = route.params

  const getPicture = async () => {
             const credentials = {email: email}
             const url = 'https://secure-forest-32038.herokuapp.com/results'
             axios.post(url,credentials).then((response) =>{
               const result = response.data;
               const {message, status, data} = result;
               console.log(data)
               if (status !== "SUCCESS"){
                  console.log(status)
               } else{
                   setImages(data)
                }
           })
         }

  useEffect(() => {
          getPicture();
      }, [])

  return ( 
    <View>
      <Text style={tw `font-bold text-center py-28 text-4xl`}>My Records</Text>


      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{bottom: 50,  backgroundColor: '#FFFFFF', width: 325, height: 500}}>
            <Text style={tw `font-semibold top-4 text-left text-xl`}>Date: 16/06/22</Text>
            <Text style={tw `top-4 text-left text-lg`}>Other possible diagnosis: Normal Skin - 90%</Text>
            <Text style={tw `top-4 text-left text-lg`}>Probable Diagnosis: Psoriasis - 3%</Text>
            <Text style={tw `top-4 text-left text-lg`}>Other possible diagnosis: Eczema - 2%</Text>
            <Image  style={{width: "40%", height: '40%', top:40, left: 90}}
                    source={{uri: images}}/>
        </View>   

        <TouchableOpacity style={[tw `absolute left-8 items-center`, {left: 0,right: 0,top:505}]}
                        onPress={() => navigation.navigate("Welcome",route.params)}>
          <Entypo name="home" size={45} /> 
          <Text style={tw `font-semibold`}>Main Menu</Text>
        </TouchableOpacity>     
      </View>


    </View>
  )
}

export default Record

const styles = StyleSheet.create({})