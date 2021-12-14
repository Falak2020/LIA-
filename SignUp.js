import React,{useState} from 'react'
import { View, Text ,Image,StyleSheet,useWindowDimensions, ScrollView} from 'react-native'
import Logo from "../../../assets/images/Logo_1.png"
import CustomButton from '../../components/CustomButton/CustomButton'
import CustomInput from '../../components/CustomInput'
const SignUp = () => {
 const [username,setUsername]= useState('')
 const [password,setPassword]= useState('')
 const [repeatPassword,setrepeatPassword]= useState('')
 const [email,setEmail]= useState('')

 const {height}= useWindowDimensions()

 
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
 const onRegister = ()=>{
    console.warn('register')
 }
 const onTermsPressed=() =>{
    console.warn('terms')
 }
 const onPrivacyPressed =() =>{
    console.warn('privacy pressed')
 }
    return (
        <ScrollView>
        <View style={styles.container}>
           <Text style={styles.title}> Create a new account</Text>
           <CustomInput 
                placeholder="User Name" 
                value={username} 
                setValue={setUsername}/>

           <CustomInput 
                placeholder="Email" 
                value={email} 
                setValue={setEmail}/>
           <CustomInput 
                placeholder="Password" 
                value={password} setValue={setPassword} 
                secureTextEntry/>

          <CustomInput 
                placeholder="Repeat Password" 
                value={password} setValue={setrepeatPassword} 
                secureTextEntry/>

           <CustomButton 

               text="Register"
               onPress={onRegister} 
               type='primary' />
           
         <Text style={styles.text}>By registering, you confirm that you accept our{' '} 
             <Text style={styles.textlink} onPress={onTermsPressed}>Terms of Use </Text> and {' '}
             <Text style={styles.textlink} onPress={onPrivacyPressed}>privacy policy</Text>
              
              </Text>


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
            {/* <CustomButton
                text="Do not have an account? Create one" 
                onPress={onSignUpPressed} 
                type='secondary'/> */}

        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        padding:20
    },
    
    title:{
    fontSize:24,
    fontWeight:'bold',
    color:'#051C60',
    margin:10    
    },
   text: {
     color:'gray' ,
     marginVertical:10
   },
   textlink:{
     color:'#FDB075'
   }
})
export default SignUp
