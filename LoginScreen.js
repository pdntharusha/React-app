import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME</Text>
      
     
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

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Don't have an account?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.buttonText}>Sign up / Register</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Forgot your password ?</Text>

      <TouchableOpacity
        style={styles.TextButton}
        onPress={() => navigation.navigate('Login')}
      >
      <Text style={styles.TextButton}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 42,
    marginBottom: 24,
    fontWeight: 'bold',
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
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginTop: 16,
    color: 'black',  
    fontWeight: 'bold',
  },
  a: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  TextButton: {
    color: '#6C63FF',
    fontWeight: 'bold',
    fontSize: 16,
    fontWeight: 'bold',
  }
  
});

export default SignInScreen;
