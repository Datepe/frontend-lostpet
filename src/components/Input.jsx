import React from 'react';
import {TextInput, StyleSheet} from 'react-native'
export default function Input(props){
    const {placeholder,value,onChangeText,secureTextEntry}= props
    return(
        <TextInput
        autoCapitalize='none'
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1.5,
        borderColor: '#9F9F9F',
        width: '95%',
        height: 50,
        alignSelf: 'center',
        fontSize: 18
       }
  });
  