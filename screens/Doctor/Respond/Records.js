import { StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native'
import React, {useState,useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'
import {Fontisto, Entypo, Ionicons} from "@expo/vector-icons"

import axios from 'axios'

const DocRecords = ({navigation,route}) => {

  const [images, setImages] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [diagnosis, setDiagnosis] = useState(null);

  const {name, email} = route.params

  const getPicture = async () => {
             const credentials = {email: email}
             const url = 'https://secure-forest-32038.herokuapp.com/results'
             axios.post(url,credentials).then((response) =>{
               const result = response.data;
               const {message, status, data} = result;
               if (status !== "SUCCESS"){
                  console.log(status)
               } else{
                   setImages(data)
                }
           })
         }
  
  const confirmDiagnosis = async () => {
          const url = 'https://secure-forest-32038.herokuapp.com/diagnosisConfirmed'
          const credentials = {email:email,confirmed: true}
          axios.post(url,credentials).then((response)=>{
              const result = response.data;
              const {message, status, data} = result;
              navigation.navigate("DocResponse",route.params)
          }).catch(error => {
              console.log(error)
          });
      }
  const getConfirmation = () => {
     const credentials = {email:email}
     const url = 'https://secure-forest-32038.herokuapp.com/getConfirmation'
     axios.post(url,credentials).then((response) =>{
      const result = response.data;
      const {message, status, data} = result;
      if (status !== "SUCCESS"){
         console.log(status)
      } else{
          console.log(data)
          setConfirmed(data)
       }
  })
  }

  getConfirmation();

  if(confirmed){
   return(<View>
    <Text style={tw `font-bold text-center py-28 text-4xl`}>My Patients' Records</Text>
    </View>)
  }else{
    getPicture();
    return ( 
      <View>
        <Text style={tw `font-bold text-center py-28 text-4xl`}>My Patients' Records</Text>
  
  
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={{bottom: 50,  backgroundColor: '#FFFFFF', width: 325, height: 500}}>
              <Text style={tw `font-semibold top-4 text-left text-xl`}>Name: Shrey Shah</Text>
              <Text style={tw `font-semibold top-4 text-left text-lg`}>Date: 01/07/22</Text>
              <Text style={tw `top-4 text-left text-lg`}>Probable Diagnosis: Normal Skin - 90%</Text>
              <Text style={tw `top-4 text-left text-lg`}>Other possible diagnosis: Psoriasis - 3%</Text>
              <Text style={tw `top-4 text-left text-lg`}>Other possible diagnosis: Eczema - 2%</Text>
              <Image  style={{width: "40%", height: '40%', top:40, left: 90}}
                      source={{uri: images}}/>
          </View>  
  
          <View>
          <TouchableOpacity style={[
                                tw ` w-80 bg-black right-0 rounded-2xl p-3`,
                                {top: -100 ,marginHorizontal : "2%"}]}
                             onPress={() => confirmDiagnosis()}>
            <Text style={tw `font-semibold text-center text-2xl text-white`}>Confirm diagnosis</Text>
          </TouchableOpacity>     
  
  
          <TouchableOpacity style={[tw `absolute left-8 items-center`, {left: 0,right: 0,top:-5}]}
                          onPress={() => navigation.navigate("DoctorLanding",route.params)}>
            <Entypo name="home" size={45} /> 
            <Text style={tw `font-semibold`}>Main Menu</Text>
          </TouchableOpacity> 
  
          </View>
        </View>
  
  
      </View>
    )
  }

  
}

export default DocRecords

const styles = StyleSheet.create({})