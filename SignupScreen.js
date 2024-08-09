import React, { useState } from 'react';
import { View, Text,Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.H1}>Create a new  User Account</Text>
     
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>User name</Text>
        <TextInput
          placeholder="Enter your user name"
          onChangeText={setUsername}
          value={username}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Enter your email"
          onChangeText={setEmail}
          value={email}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter your password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}> Re enter password</Text>
        <TextInput
          placeholder="Re enter your password"
          onChangeText={setReEnterPassword}
          value={reEnterPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Already have a Account ?</Text>
      <TouchableOpacity
        style={styles.TextButton}
        onPress={() => navigation.navigate('Login')}
      >
      <Text style={styles.TextButton}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40, 
    fontWeight: 'bold',
    color: 'black',
  },
  H1: {
    fontSize: 26,
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#1D6ADD',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#6C63FF',
    width: 310,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: 'black',  
    fontWeight: 'bold',
  },
  TextButton: {
    color: '#6C63FF',
    fontWeight: 'bold',
  }
});

export default SignupScreen;
