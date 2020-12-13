import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome To CICD App </Text>
      <TextInput 
        style={{borderWidth:1,paddingHorizontal:20,marginVertical:8}}
        placeholder="Enter Your Name"
      />
      <StatusBar style="auto" />
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
});
