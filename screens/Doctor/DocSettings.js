import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { Switch } from 'react-native-switch';


const DocSettings = ({navigation,route}) => {

    const [switchValue, setSwitchValue] = useState(true);

    const toggleSwitch = (value) => {
      setSwitchValue(value);
    };

  return (
    <View>
      <Text style={tw `font-bold text-center py-28 text-4xl`}>Settings</Text>

      <Text style={tw `left-4 py-28 text-xl bottom-40`}>Do you consent to using your pictures to improve derm.ai's ML algorithm?</Text>

      <Text style={tw `bottom-64 left-4`}>{switchValue ? 'I consent' : 'I do not consent'}</Text>
      <View style={tw `bottom-64 left-4`}>
            <Switch
                onValueChange={toggleSwitch}
                value={switchValue}
                />
       </View>

       <TouchableOpacity style={[
                              tw `bottom-0 w-48 bg-black left-24 rounded-2xl p-4`,
                              {marginHorizontal : "2%"}]}
                           onPress={() => navigation.navigate("DoctorLanding",route.params)}>
          <Text style={tw `font-semibold text-center text-2xl text-white`}>Main Menu</Text>
        </TouchableOpacity>  
    </View>
  )
}

export default DocSettings

const styles = StyleSheet.create({})