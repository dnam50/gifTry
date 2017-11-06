/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state= {
      index : 0
    }
    this.imageList = [
      require('./android/app/assests/1.gif'),
      require('./android/app/assests/2.gif'),
      require('./android/app/assests/3.gif'),
      require('./android/app/assests/4.gif'),
      require('./android/app/assests/5.jpg'),
      require('./android/app/assests/6.jpg')
  ];
  }

  changepic() {
    console.log(this.index)
    if(this.state.index >= this.imageList.length - 1){
      this.setState({
        index:0
      })
  } else {
    this.setState({
      index:this.state.index + 1
    })
  }
  }

  render() {
    console.log("this.index");
    console.log(this.state.index);
    return (
      <View style={styles.container}>
      <Text> HELLLLLO </Text>
      
        <Image source={this.imageList[this.state.index]} style={{backgroundColor:'red', width: 100, height: 100 }} resizeMode="contain" />
        <Text> BYE </Text>
        <TouchableOpacity onPress={() => {this.changepic()}}>
        <View style={{width:100, height:100}}>
      <Text> Click ME!! </Text>
      </View>
    </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
