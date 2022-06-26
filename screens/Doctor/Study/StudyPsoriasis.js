import { StyleSheet, Text, View, ScrollView, TouchableOpacity,Image, ImageEditor, Alert } from 'react-native'
import React, {useState,useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'

import axios from 'axios'
import { CardStyleInterpolators } from '@react-navigation/stack'
import {Fontisto, Entypo, Ionicons} from "@expo/vector-icons"


const StudyPsoriasis = ({navigation,route}) => {
    return (
        <View>
            <View style={{height: 110, backgroundColor: "#000000"}}>
                <TouchableOpacity 
                    style={[tw `absolute w-4 bg-black p-8 rounded-2xl left-40`, {marginHorizontal : "30%"}]}
                                onPress={() => navigation.navigate("Login", route.params)}>
                    <Text style={tw `font-semibold text-center text-sm text-white`}>Log Out</Text>
                </TouchableOpacity>
                
                <Text style={[tw `font-bold text-center text-4xl`, {bottom:-50, color: "#ffffff"}]}>{"Dr. Daftary" || "Shrey Shh"}</Text>
            </View>
        
        <ScrollView>
            <Text style={[tw `font-semibold text-2xl text-black`, {paddingLeft: 30, paddingTop:10 }]}>Psoriasis</Text>
            <Text style={[tw `font-semibold text-xl text-black`, {paddingLeft: 30, paddingTop:10 }]}>What is it?</Text>

            <View style={{bottom:-10}}>
                <Text style={{paddingLeft:30, paddingRight:30}}>
                    Psoriasis is a skin condition that causes flaky patches of skin which form scales.
                    Psoriasis is a long-lasting (chronic) disease that usually involves periods when you have no symptoms or mild symptoms, followed by periods when symptoms are more severe.
                    These patches normally appear on your elbows, knees, scalp and lower back, but can appear anywhere on your body. 
                </Text>
            </View>
            <Text style={{paddingLeft: 25, paddingTop:10 }}>  </Text>

            <Text style={[tw `font-semibold text-xl text-black`, {paddingLeft: 30, paddingTop:10 }]}>What's the difference between Psoriasis on dark and fair skin?</Text>
            <View style={{bottom:-10}}>
                <Text style={{paddingLeft:30, paddingRight:30}}>
                    On brown, black and white skin the patches can look pink or red, and the scales white or silvery. On brown and black skin the patches can also look purple or dark brown, and the scales may look grey.
                </Text>
                <View style={{bottom: 0, width: 375, height: 500}}>
                    <Image  style={{width: "40%", height: '42%', top:40, left: 25}}
                        source={require("../../../assets/psor1.jpeg")}/>
                    <Image  style={{width: "40%", height: '42%', top:-170, left: 190}}
                        source={require("../../../assets/psor2.jpeg")}/>
                </View>

                    <Text style={{bottom: 225, paddingLeft:30, paddingRight:30}}>
                    As psoriasis heals, it can leave areas of discoloration, which can take between 3 and 12 months to disappear.
                    Psoriasis tends to follow a relapsing-remitting pattern, meaning that people will experience a period of few or no symptoms and then a flare-up of more severe symptoms.
                    </Text>
          
            </View>

            
         

        <View style={tw `h-1/2 items-center`}>   
            <TouchableOpacity style={[tw `absolute items-center`, {left: 0, right: 0, top: "235%"}]}
                            onPress={() => navigation.navigate("DoctorLanding",route.params)}>
                <Entypo name="home" size={45} /> 
                <Text style={tw `font-semibold`}>Main Menu</Text>
            </TouchableOpacity>
        </View>

        </ScrollView>
    </View>
    )
}

export default StudyPsoriasis

const styles = StyleSheet.create({
    buttonBlack: {
        justifyContent: 'center', 
        width: 320, 
        height: 60, 
        backgroundColor: "#000000", 
        borderRadius: 10, 
        marginHorizontal : "15%"
    },
    buttonWhite: {
        justifyContent: 'center', 
        width: 320, 
        height: 60, 
        backgroundColor: "#ffffff", 
        borderRadius: 10, 
        marginHorizontal : "15%"
    }
});
