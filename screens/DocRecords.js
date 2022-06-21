import { StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native'
import React, {useState,useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'

import axios from 'axios'

const DocRecords = ({navigation,route}) => {

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
      <Text style={tw `font-bold text-center py-28 text-4xl`}>My Patient Records</Text>


      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{bottom: 50,  backgroundColor: '#ECECEC', width: 325, height: 500}}>
            <Text style={tw `font-semibold top-4 text-left text-xl`}>Name: Shrey Shah</Text>
            <Text style={tw `font-semibold top-4 text-left text-lg`}>Date: 16/06/22</Text>
            <Text style={tw `top-4 text-left text-lg`}>Probable Diagnosis: Psoriasis - 96%</Text>
            <Text style={tw `top-4 text-left text-lg`}>Other possible diagnosis: Keloids - 4%</Text>
            <Image  style={{width: "40%", height: '40%', top:40, left: 90}}
                    source={{uri: images}}/>
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

export default DocRecords

const styles = StyleSheet.create({})