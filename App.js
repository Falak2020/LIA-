import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {

  const [hasPermission,setHasPermission] = useState(null)
  const [scanned,setScanned] = useState(false)
  const [text,setText] = useState('Not yet')

  const ask = ()=>{
    (
      async () => {
        const {status} = await BarCodeScanner.requestPermissionsAsync()
        setHasPermission(status === 'granted')
      }
    )()
  }

  useEffect(()=> {
    ask();
  },[])


  const handleBarcode = ({type,data}) =>{
    setScanned(true)
    setText(data)
    console.log(type +'ffff'+data)
  }

  if(hasPermission === null){
    return(
      <View style={styles.container}>
      <Text>requesting for permission!</Text>
    
    </View>
    )
  }

  if(hasPermission === false){
    return(
      <View style={styles.container}>
      <Text>No Access!</Text>
      <Button title ="Allow camera" onPress = {() => ask()}/>
    
    </View>
    )
  }
  return (
    <View style={styles.container}>
       <View style ={styles.barcode}>
          <BarCodeScanner
          onBarCodeScanned = {scanned? undefined : handleBarcode}
          style = {{height:400,width:400}}
          />
       </View>

       <Text style = {styles.maintext}>{text}</Text>

       {scanned && <Button title ="scan again" onPress = {()=>setScanned(false)} color='tomato'/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  barcode:{
    
    alignItems:'center',
    justifyContent:'center',
    height:300,
    width:300,
    overflow:'hidden',
    borderRadius:30,

  },
  maintext:{
    fontSize:16,
    margin:20
  }
});
