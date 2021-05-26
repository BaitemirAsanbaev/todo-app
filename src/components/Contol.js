import React, { useState } from "react"
import { Button, TextInput, View, StyleSheet, Alert } from "react-native";

const Control = ({send}) => {

  const [value, setValue] = useState('');

  function pressCallback(){
    if(value.trim()){
      send(value);
      setValue('');
    }
    else{
      Alert.alert("input is empty")
    }
  }

  return (
  <View style={styles.control}>
    <TextInput
    style={styles.input}
    onChangeText={setValue}
    value={value}
    autoCorrect={false}
    autoCapitalize="none"/>
    <Button
    style={styles.btn}
    title="Add"
    onPress={pressCallback}/>
  </View> );
}

const styles = StyleSheet.create({
  control:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input:{
    width: '70%',
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    borderStyle: 'solid',
    padding: 5
  },
  btn:{
    backgroundColor: '#000'
  }
})
 
export default Control;