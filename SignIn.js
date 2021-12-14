import React,{useState} from 'react'
import { View, Text ,Image,StyleSheet,useWindowDimensions, ScrollView} from 'react-native'
import Logo from "../../../assets/images/Logo_1.png"
import CustomButton from '../../components/CustomButton/CustomButton'
import CustomInput from '../../components/CustomInput'
const SignIn = () => {
 const [username,setUsername]= useState('')
 const [password,setPassword]= useState('')
 const {height}= useWindowDimensions()

 const onSignInPressed =()=>{
     console.warn('sign In')
 }
 const onForgetPasswordPressed =()=>{
    console.warn('sign In')
 }
 const onSignInFacebook =()=>{
    console.warn('sign In')
 }
 const onSignInGoogle =()=>{
    console.warn('sign In')
 }
 const onSignInApple =()=>{
    console.warn('sign In')
 }
 const onSignUpPressed = ()=>{
    console.warn('sign up')
 }
    return (
        <ScrollView>
        <View style={styles.container}>
           <Image source={Logo} style={[styles.logo,{height:height*0.3} ]} resizeMode="contain"/>

           <CustomInput 
           placeholder="User Name" 
           value={username} 
           setValue={setUsername}/>

           <CustomInput 
                placeholder="Password" 
                value={password} setValue={setPassword} 
                secureTextEntry/>

           <CustomButton 
               text="Sign In"
               onPress={onSignInPressed} 
               type='primary' />
           <CustomButton
                text="Forget Password" 
                onPress={onForgetPasswordPressed} 
                type='secondary'/>
           <CustomButton 
                text="Sign In with Facebook" 
                onPress={onSignInFacebook} 
                type='primary'
                bgColor="#E7EAF4"
                fgColor="#4765A9"
                />
           <CustomButton 
                text="Sign In with Google "
                onPress={onSignInGoogle} 
                type='primary'
                bgColor="#FAE9EA"
                fgColor="#DD4D44"
                
                />
          
           <CustomButton 
                text="Sign In with Apple" 
                onPress={onSignInApple} 
                type='primary'
                bgColor="#e3e3e3"
                fgColor="#363636"
                
                
                />
            <CustomButton
                text="Do not have an account? Create one" 
                onPress={onSignUpPressed} 
                type='secondary'/>

        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        padding:20
    },
    logo:{
        width:'70%',
        maxWidth:300,
        maxHeight:200
    }
})
export default SignIn
