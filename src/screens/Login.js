import React, { useState } from 'react';
import { StyleSheet, Text, View, ToastAndroid } from 'react-native';
import {SocialIcon, Button, Input} from "../components";
import useForm from '../hook/useForm'
import { Alert } from 'react-native';
import { AsyncStorage } from 'react-native';
import Loading from '../screens/Loading'
import {validateEmail} from '../utils/Validation'
export default function login(props) {
  const {navigation} = props
  const[loading, setLoading] = useState(false)
  const initialState = {
    email: '',
    password: '',
}

const onSubmit = (values) => {
    const {email} = values
    
    if(!validateEmail(email)){
      ToastAndroid.show('email error', ToastAndroid.SHORT);
    }else{
      setLoading(true)
      fetch('https://serverless-nu-flame.now.sh/api/auth/login',{
              method: 'POST',
              headers: {
                  'Content-Type': 'Application/json',
              },
              body: JSON.stringify(values),
          })
          .then(x => x.text())
          .then(x => { 
              try{
                return JSON.parse(x)
              } catch {
                  throw x
              }
          })
          .then(x => {
             AsyncStorage.setItem('token', x.token)
             setLoading(false)
             navigation.navigate('Meals')
          })
          .catch(e => {Alert.alert('Error', e) , setLoading(false)})
    }
    
}

const {subscribe, handleSubmit, inputs} = useForm(initialState, onSubmit)
  return (

    <View style={styles.container}>
       
      <View style={styles.InputContainer}>
      <Input 
        placeholder='Correo Electronico'
        onChangeText = {subscribe('email')}
        value = {inputs.email} />
        <Input 
        placeholder='Contraseña'
        onChangeText = {subscribe('password')}
        value = {inputs.password}
        secureTextEntry={true} 
        />
      </View>
      <View style={styles.TextContainer}> 
          <Text>¿Aun no estas registrado?</Text>
          <Text 
          onPress={() => navigation.navigate('Register')}
          style={{color: '#00a680',}}
          >
              Registrase
          </Text>
      </View>
      <View style={styles.ButtonContainer}>
        <Button title='Iniciar Sesion' onPress={handleSubmit}/>
        <SocialIcon/>
      </View>
      <Loading isVisible={loading} text='iniciando sesion'/>
      
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
  InputContainer: {
    width: '80%',
    margin: 10
  },
  ButtonContainer:{
    backgroundColor: '#fff',
    width: '80%',
    
  },
  TextContainer:{
      marginBottom: 20,
      flexDirection: 'row'
  }
});
