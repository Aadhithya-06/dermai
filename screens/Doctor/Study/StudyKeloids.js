import { StyleSheet, Text, View, ScrollView, TouchableOpacity,Image, ImageEditor, Alert } from 'react-native'
import React, {useState,useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'

import axios from 'axios'
import { CardStyleInterpolators } from '@react-navigation/stack'
import {Fontisto, Entypo, Ionicons} from "@expo/vector-icons"


const StudyKeloids = ({navigation,route}) => {
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
            <Text style={[tw `font-semibold text-2xl text-black`, {paddingLeft: 30, paddingTop:10 }]}>Keloids</Text>
            <Text style={[tw `font-semibold text-xl text-black`, {paddingLeft: 30, paddingTop:10 }]}>What is it?</Text>

            <View style={{bottom:-10}}>
                <Text style={{paddingLeft:30, paddingRight:30}}>
                    A keloid scar is an enlarged, raised scar that can be pink, red, skin-coloured or darker than the surrounding skin.
                    They can develop after very minor skin damage, such as an acne spot or a piercing, and spread beyond the original area of skin damage.
                </Text>
            </View>
            <Text style={{paddingLeft: 25, paddingTop:10 }}>  </Text>

            <Text style={[tw `font-semibold text-xl text-black`, {paddingLeft: 30, paddingTop:10 }]}>What's the difference between Psoriasis on dark and fair skin?</Text>
            <View style={{bottom:-10}}>
                <Text style={{paddingLeft:30, paddingRight:30}}>
                    Keloid scars are hard, raised scars with a reddish or purplish coloring that develop outside the margins of the original wound that can develop in all skin types. According to a study published by the National Center for Biotechnology Information, a branch of the National Institutes of Health, people with darker skin pigmentation are more likely to have severe skin scarring than those with fair skin. They are also more likely to develop keloids and form excessive scars.                </Text>
                <View style={{bottom: 0, width: 375, height: 500}}>
                    <Image  style={{width: "40%", height: '42%', top:40, left: 25}}
                        source={require("../../../assets/keloids1.jpeg")}/>
                    <Image  style={{width: "40%", height: '42%', top:-170, left: 190}}
                        source={require("../../../assets/keloids2.jpeg")}/>
                </View>

                    <Text style={{bottom: 225, paddingLeft:30, paddingRight:30}}>
                        You cannot completely prevent keloid scars, but you can avoid any deliberate cuts or breaks in the skin, such as tattoos or piercings, including on the earlobes. 
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

export default StudyKeloids

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
