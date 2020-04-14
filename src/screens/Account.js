import React from 'react'
import {StyleSheet,View} from 'react-native'
import { Button} from "../components";
import AccountOptions from '../utils/AccountOptions'
import InfoUser from '../utils/InfoUser'
export default function meals(props){
  const {navigation} = props

  return(
    <View style={styles.viewUserInfo}>
    <InfoUser/>
    <AccountOptions/>
    <Button title='cerrar sesion' onPress={() => navigation.navigate('Login')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  viewUserInfo: {
      minHeight: '100%',
      },
 
})
