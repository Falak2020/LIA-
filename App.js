import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SignIn  from './src/screens/SigninScreen';
import SignUp from './src/screens/SignUpScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <SignUp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F9FBFC"
  },
});
