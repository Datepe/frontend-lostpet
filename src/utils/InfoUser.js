import React from 'react';

import {View, Text, StyleSheet,ImageBackground} from 'react-native';
import {Avatar} from 'react-native-elements';


export default function InfoUser(props){
     
    return(
       
        <ImageBackground source={require('../../assets/fondo.jpg')} style={{width: '100%', height: 200}}>
        <View style={styles.viewUserInfo}>
            <Avatar
            rounded
            size='large'
            showEditButton
            onEditPress={() => {}}
            containerStyle={styles.userInfoAvatar}
            source={{
                uri: 'https://api.adorable.io/avatars/165/abott@adorable.png'
            }}/>
            <View>
                <Text style={styles.displayName}>
                  nombre de usuario
                </Text>
                <Text style={{color: '#fff'}}>Social Red</Text>
                 
            </View>
            
            
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    viewUserInfo: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',    
        paddingTop: 65,
        paddingBottom: 30
    },
    userInfoAvatar: {
        marginRight: 20,
        borderWidth: 1,
        borderColor: '#fff'
    },
    displayName: {
        fontWeight: 'bold',
        color: '#fff'
    }
});