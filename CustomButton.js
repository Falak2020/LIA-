import React from 'react'
import { View, Text,Button ,StyleSheet, Pressable} from 'react-native'

const CustomButton = ({onPress,text,type,bgColor,fgColor}) => {
    return (
        <Pressable 
        onPress={onPress}
        style={[styles.container ,
               styles[`container_${type}`],
               bgColor?{backgroundColor:bgColor}:{}
               ]}>
            <Text style={[styles.text,
                          styles[`text_${type}`],
                          fgColor?{color:fgColor}:{}
                          
                          ]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
 container: { 
     width: '100%',
     
     padding:15,
     marginVertical:5,
     alignItems:'center',
     borderRadius:5

 },
 container_primary:{
    backgroundColor:'#3B71F3',
 },
 container_secondary:{},

   text_primary: { 
    color: 'white',
    fontWeight:'bold'
  
   } ,
   text_secodary:{}
})
export default CustomButton
