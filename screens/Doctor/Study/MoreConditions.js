import { StyleSheet, Text, View, TouchableOpacity,Image, ImageEditor, Alert } from 'react-native'
import React, {useState,useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'

import axios from 'axios'
import { CardStyleInterpolators } from '@react-navigation/stack'
import {Fontisto, Entypo, Ionicons} from "@expo/vector-icons"


const MoreConditions = ({navigation,route}) => {
    const date = new Number(new Date().toLocaleDateString().split("/")[1]).valueOf();
    return (
        <View>
            <Text style={tw `font-bold text-center py-28 text-4xl`}> Support for more conditions is coming soon... </Text>
            <View>
                <TouchableOpacity style={[tw `absolute left-8 items-center`, {right: -180, top:230}]}
                                onPress={() => navigation.navigate("DoctorLanding",route.params)}>
                    <Entypo name="home" size={45} /> 
                    <Text style={tw `font-semibold`}>Main Menu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[tw `absolute left-8 items-center`, {left: 30,top:230}]}
                                onPress={() => navigation.navigate("Study",route.params)}>
                    <Entypo name="book" size={45} /> 
                    <Text style={tw `font-semibold`}>Study</Text>
                </TouchableOpacity>    
            </View>
        </View>
    )
}

export default MoreConditions

const styles = StyleSheet.create({
    buttonGrey: {
        justifyContent: 'center', 
        width: 320, 
        height: 60, 
        backgroundColor: "#888888", 
        borderRadius: 10, 
        marginHorizontal : "15%"
    },
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
