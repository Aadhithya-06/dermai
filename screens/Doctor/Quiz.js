import { StyleSheet, Text, View, TouchableOpacity,Image, ImageEditor} from 'react-native'
import React, {useState,useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'

import axios from 'axios'

const DoctorExcema = ({navigation,route}) => {

  const [images, setImages] = useState(null);
  const [images2, setImages2] = useState(null);
  const [quizType, setQuizType] = useState(null);

  // const {name, email} = route.params

  const getPicture = async () => {
             const url = 'https://secure-forest-32038.herokuapp.com/excema'
             axios.post(url).then((response) =>{
               const result = response.data;
               const {message, status, image1, image2, quizType} = result;
               if (status !== "SUCCESS"){
                  console.log(message)
               } else{
                 setImages(image1)
                 setImages2(image2)
                 setQuizType(quizType);
              }
           })
         }

  useEffect(() => {
          getPicture();
      }, [])

  // if quiztype is 0: what condition is it?
  // if quiztype is 1: are these the same condition?
  // if (quizType == 0) {
    var marks = 0;

    var questions = 0;
    return ( 
      <View>
        <Text style={tw `font-bold text-center py-28 text-4xl`}>What condition is this?</Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={{bottom: 50,  backgroundColor: '#ECECEC', width: 375, height: 500}}>
              <Image  style={{width: "48%", height: '50%', top:40, left: 0}}
                      source={{uri: images}}/>
              <Image  style={{width: "48%", height: '50%', top:-210, left: 190}}
                      source={{uri: images2}}/>
          </View>  
     

          <View> 
            <TouchableOpacity style={{bottom: 220, left:-90,  backgroundColor: '#000000', width: 150, height: 50, borderRadius:20}}
                             onPress={() => {

                             }}>
              <Text style={tw `font-semibold text-center text-2xl text-white`}>Excema</Text>
            </TouchableOpacity>  

            <TouchableOpacity style={{bottom: 270, left:80,  backgroundColor: '#000000', width: 150, height: 50, borderRadius:20}}
                             onPress={() => {

                             }}>
              <Text style={tw `font-semibold text-center text-2xl text-white`}>Psoriasis</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={{bottom: 240, left:-90,  backgroundColor: '#000000', width: 150, height: 50, borderRadius:20}}
                             onPress={() => {

                             }}>
              <Text style={tw `font-semibold text-center text-2xl text-white`}>Keloids</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={{bottom: 290, left:80,  backgroundColor: '#000000', width: 150, height: 50, borderRadius:20}}
                             onPress={() => {

                             }}>
              <Text style={tw `font-semibold text-center text-2xl text-white`}>Not Same</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={{bottom: 200, left:0,  backgroundColor: '#000000', width: 150, height: 50, borderRadius:20}}
                             onPress={() => navigation.navigate("DoctorLanding",route.params)}>
              <Text style={tw `font-semibold text-center text-2xl text-white`}>Main Menu</Text>
            </TouchableOpacity> 
          </View>
  
       </View>

    </View> 
   
    )
  // } else {
  //   return ( 
  //     <View>
  //       <Text style={tw `font-bold text-center py-28 text-4xl`}>What condition is this?</Text>
  //       <View style={{justifyContent: 'center', alignItems: 'center'}}>
  //         <View style={{bottom: 50,  backgroundColor: '#ECECEC', width: 325, height: 500}}>
  //             <Image  style={{width: "50%", height: '50%', top:40, left: 0}}
  //                     source={{uri: images}}/>
  //             <Image  style={{width: "50%", height: '50%', top:-210, left: 160}}
  //                     source={{uri: images2}}/>
  //         </View>   
  //         <View>
  //         <TouchableOpacity style={{bottom: 200, left:-50,  backgroundColor: '#000000', width: 125, height: 50}}
  //                            onPress={() => navigation.navigate("DoctorLanding",route.params)}>
  //           <Text style={tw `font-semibold text-center text-2xl text-white`}>Main Menu</Text>
  //         </TouchableOpacity> 
  //         <TouchableOpacity style={{bottom: 150,  backgroundColor: '#000000', width: 125, height: 50}}
  //                            onPress={() => navigation.navigate("DoctorLanding",route.params)}>
  //           <Text style={tw `font-semibold text-center text-2xl text-white`}>Main Menu</Text>
  //         </TouchableOpacity>    
  //         </View>
  
  //         <View>
  //         <TouchableOpacity style={[
  //                               tw `bottom-0 w-48 bg-black right-0 rounded-2xl`,
  //                               {marginHorizontal : "2%"}]}
  //                            onPress={() => navigation.navigate("DoctorLanding",route.params)}>
  //           <Text style={tw `font-semibold text-center text-2xl text-white`}>Main Menu</Text>
  //         </TouchableOpacity>     
  //         </View>
  //       </View>
  
  
  //     </View>
  //   )
  // }
  
}

export default DoctorExcema

const styles = StyleSheet.create({})