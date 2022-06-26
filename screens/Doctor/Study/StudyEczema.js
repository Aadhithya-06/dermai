import { StyleSheet, Text, View, ScrollView, TouchableOpacity,Image, ImageEditor, Alert } from 'react-native'
import React, {useState,useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'

import axios from 'axios'
import { CardStyleInterpolators } from '@react-navigation/stack'
import {Fontisto, Entypo, Ionicons} from "@expo/vector-icons"


const StudyEczema = ({navigation,route}) => {
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
            <Text style={[tw `font-semibold text-2xl text-black`, {paddingLeft: 30, paddingTop:10 }]}>Eczema</Text>
            <Text style={[tw `font-semibold text-xl text-black`, {paddingLeft: 30, paddingTop:10 }]}>What is it?</Text>

            <View style={{bottom:-10}}>
                <Text style={{paddingLeft:30, paddingRight:30}}>
                    Atopic eczema (atopic dermatitis) is the most common form of eczema, a condition that causes the skin to become itchy, dry and cracked.
                    Atopic eczema is more common in children, often developing before their first birthday. But it may also develop for the first time in adults.
                    It's usually a long-term (chronic) condition, although it can improve significantly, or even clear completely, in some children as they get older.
                </Text>
            </View>
            <Text style={{paddingLeft: 25, paddingTop:10 }}>  </Text>

            <Text style={[tw `font-semibold text-xl text-black`, {paddingLeft: 30, paddingTop:10 }]}>What's the difference between Eczema on dark and fair skin?</Text>
            <View style={{bottom:-10}}>
                <Text style={{paddingLeft:30, paddingRight:30}}>
                    Inflamed skin can become red on lighter skin, and darker brown, purple or grey on darker skin.
                    Often, eczema in people of color, especially Black people, can appear darker than the surrounding skin, feel dry or thickened to the touch, and is intensely itchy.
                </Text>
                <View style={{bottom: 0, width: 375, height: 500}}>
                    <Image  style={{width: "40%", height: '42%', top:40, left: 25}}
                        source={require("../../../assets/excema2.jpg")}/>
                    <Image  style={{width: "40%", height: '42%', top:-170, left: 190}}
                        source={require("../../../assets/excema1.jpg")}/>
                </View>

                    <Text style={{bottom: 225, paddingLeft:30, paddingRight:30}}>
                        Most people think of eczema as a red, dry, and itchy rash - how it appears in light skin. However, in dark skin, including brown skin, dark brown skin, Black skin, and other darker skin tones this redness may be difficult to see. Eczema flare-ups tends to look darker brown, purple or ashen grey in color.
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

export default StudyEczema

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
