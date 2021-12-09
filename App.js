/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
 


class App extends Component {
   state = {
      qr : ""
    }
    onRead = e =>{
      this.setState({qr:e.data})
    }


  render() {

    

    return (
      <>
      <SafeAreaView >
    
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
       
            <QRCodeScanner
            onRead={this.onRead}
           
          />
         <View><Text>{this.state.qr}</Text></View>
      </ScrollView>
    </SafeAreaView>
    </>
    )
  }
}



const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
