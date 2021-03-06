import React from 'react'
import { View, Text,TextInput,StyleSheet } from 'react-native'

const CustomInput = ({value,setValue ,placeholder,secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput 
            value={value}
            onChangeText={setValue}
            
            placeholder={placeholder} 
            secureTextEntry={secureTextEntry}
            
            style={styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

        backgroundColor:'white',
        width:'100%',
        borderColor:'#e8e8e8',
        borderRadius:5,
        borderWidth:2,
        paddingHorizontal:10,
        marginVertical:10

    },
    input:{}
})

export default CustomInput
