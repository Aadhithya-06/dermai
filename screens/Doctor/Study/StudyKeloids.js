import { StyleSheet, Text, View, TouchableOpacity,Image, ImageEditor, Alert } from 'react-native'
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
        
        <View style={tw `h-1/2 items-center`}>
            <TouchableOpacity style={[{ bottom: -50 }, styles.buttonWhite]}>
                <Text style={tw `font-semibold text-left text-xl text-black`}>   Content:</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={[
                                    {bottom: -60}, 
                                    styles.buttonBlack
                                ]}
                                onPress={() => navigation.navigate("StudyEczema", route.params)}>
                <Text style={tw `font-semibold text-center text-xl text-white`}>Study Eczema</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={[
                                    {bottom: -70}, 
                                    styles.buttonBlack
                                ]}
                                onPress={() =>{
                                    navigation.navigate("StudyPsoriasis", route.params);

                                }}>
                <Text style={tw `font-semibold text-center text-xl text-white`}>Study Psoriasis</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={[
                                    {bottom: -80}, 
                                    styles.buttonBlack
                                ]}
                                onPress={() => navigation.navigate("StudyKeloids", route.params)}>
                <Text style={tw `font-semibold text-center text-xl text-white`}>Study Keloids</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={[
                                    {bottom: -90}, 
                                    styles.buttonBlack
                                ]}
                                onPress={() => navigation.navigate("MoreConditions", route.params)}>
                <Text style={tw `font-semibold text-center text-xl text-white`}>Study more conditions</Text>
            </TouchableOpacity>   
            <TouchableOpacity style={[{ bottom: -100 }, styles.buttonWhite]}>
                <Text style={tw `font-semibold text-left text-xl text-black`}>   Quiz:</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[
                                    {bottom: -110}, 
                                    styles.buttonBlack
                                ]}
                                onPress={() => navigation.navigate("QuizLanding", route.params)}>
                <Text style={tw `font-semibold text-center text-xl text-white`}>Go to the Quiz Page</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[tw `absolute items-center`, {left: 0, right: 0, top: "235%"}]}
                            onPress={() => navigation.navigate("DoctorLanding",route.params)}>
                <Entypo name="home" size={45} /> 
                <Text style={tw `font-semibold`}>Main Menu</Text>
            </TouchableOpacity>


        </View>
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
