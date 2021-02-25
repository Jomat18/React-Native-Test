import React, { Component } from 'react'
import {
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image 
} from 'react-native'
import styles from './styleLogin';
import LinearGradient from 'react-native-linear-gradient';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn() {
    const { username, password } = this.state;
    console.log(username, password)
  }
  render() {
    return (
      <View style={styles.containerRoot}>
        <LinearGradient
          colors={['#00B2FF', '#B7C7C9' ,'#29B3DE']}
          style={{flex: 1}}
        >
          <View style={styles.containerChild}>  
            <Image 
              source={require('../../src/assets/images/logo.jpg')}  
              style={{width:'50%', height: '50%', resizeMode: 'contain', borderRadius: 80}} 
            />
            <Text style={[styles.text]}>Login</Text>  
            <TextInput style={styles.input}
              placeholder="username" 
              type="email" 
              autofocus="true"
            />
            <TextInput style={styles.input}
              placeholder="password"
              secureTextEntry
            />
            <TouchableOpacity style={styles.button}
              onPress={() => this.onSignIn()}>
              <Text style={{color: '#fff', fontSize:25}}> Login </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>    
    )
  }
}

export default Login