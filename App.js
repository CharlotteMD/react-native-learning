import { StatusBar } from 'expo-status-bar';

import React, {useState} from 'react';
import { View, ScrollView, Text, TextInput, Pressable, StyleSheet } from 'react-native';

const App = () => {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 8}}>
        <ScrollView style={{ backgroundColor: '#ecf0f1' }}>
          <FormField label='name'/>
          <FormField label='date of birth'/>
          <FormField label='breed'/>
          <FormField label='favourite toy'/>
          <FormField label='password'/>
        </ScrollView>
        <View style={styles.layout}>
          <Pressable>
            {(state) => <Box pressed={state.pressed} />}
          </Pressable>
        </View>
        <StatusBar style='auto'/>
      </View>
    )
};

export default App;

const FormField = (props) => {
  const [text, onChangeText] = useState("Please enter");
  const defaultlabel = `Please enter ${props.label}`;

  return (
    <View style={{padding: 16, fontSize: 18}}>
      <Text style={{padding: 8}}>{defaultlabel}</Text>
      <TextInput 
        placeholder={`Please enter ${props.label}`} 
        onChangeText={onChangeText}   
        secureTextEntry={props.label === 'password' ? true : false}
        style={{padding: 8}}
      />
    </View>
  )
}

export const Box = (props) => (
  <View style={[
    styles.box,
    props.pressed && 
      {backgroundColor: 'blue'}
    ]} 
  />
);

export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});