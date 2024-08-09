import React from 'react';
import { View, Text, ScrollView, Button, TextInput, Alert, ActivityIndicator, Switch, StyleSheet } from 'react-native';

const HomeScreen = ({ }) => {

  const showAlert = () => {
    Alert.alert('Alert Title', 'This is an example alert', [{ text: 'OK' }]);
  };

 
  const [isEnabled, setIsEnabled] = React.useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
          
      <Text style={styles.H1}>Welcome to Home Page</Text>

      <View style={styles.section}>
        <TextInput
          placeholder="Enter your First Name"
          style={styles.input}
        />
      </View>
      <View style={styles.section}>
        <TextInput
          placeholder="Enter your Last Name"
          style={styles.input}
        />
      </View>
      <View style={styles.section}>
        <TextInput
          placeholder="Enter your Age"
          style={styles.input}
        />
      </View>
      <View style={styles.section}>
        <TextInput
          placeholder="Enter your Address"
          style={styles.input}
        />
      </View>

      <View style={styles.section}>
        <Button title="Press Me" onPress={() => console.log('Button pressed')} />
      </View>


      <View style={styles.section}>
        <ScrollView style={styles.scrollView}>
          <Text>This is the Home Page content.</Text>
        </ScrollView>
      </View>

      
      <View style={styles.section}>
        <Button title="Show Alert" onPress={showAlert} />
      </View>

      <View style={styles.section}>
        <ActivityIndicator size="large" color="#6C63FF" animating={true} />
      </View>
     
      <View style={styles.section}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#000000' : '#ff0004'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ backgroundColor: isEnabled ? '#4FC3F7' : 'transparent' }}
        />
      </View>  
      
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  H1: {
    fontSize: 30,
    marginTop:24,
    marginBottom: 24,
    fontWeight: 'bold',
    textAlign:"center",
    color:'#1D6ADD',
  },
  section: {
    marginBottom: 20,
  },
  scrollContent: {
    width: '100%',
    alignItems: 'center',
  },
  
  content: {
    alignItems: 'center',
    backgroundColor:'',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  scrollView: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listItem: {
    fontSize: 18,
    padding: 10,
  },
  
});

export default HomeScreen;
