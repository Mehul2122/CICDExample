import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';


export default class Greeting  extends Component{

  constructor(props){
    super(props);
    this.state ={
      name:"",
    }
  }

  render(){

    return(
          <View style={styles.container}>

              <Text>Welcome To CICD App {this.state.name} </Text>

              <TextInput 
                style={styles.textinputStyle}
                value={this.state.name}
                placeholder="Enter Your Name"
                onChangeText={(text)=>this.setState({name:text})}
              />
          </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinputStyle:{

    borderWidth:1,
    paddingHorizontal:20,
    marginVertical:8,
    height:30,
    borderColor:'grey'

  }
});
