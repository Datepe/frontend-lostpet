import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';


const modal  = ({navigation}) => {
  return (
    <View style={styles.container}> 
    
      <AcctionButton />
             
      </View>
    )
}

export default modal
function AcctionButton(props){
  
  return (
      <ActionButton buttonColor="#FF7C00">
      <ActionButton.Item
        buttonColor="#9b59b6"
        title="Notificar Mascota Encontrada"
        onPress={() => {}}>
        <Icon name="paw" style={styles.actionButtonIcon} />
      </ActionButton.Item>
      <ActionButton.Item
        buttonColor="#9b59b6"
        title="Mapa"
        onPress={() => {}}>
        <Icon name="map-marker" style={styles.actionButtonIcon} />
      </ActionButton.Item>
      </ActionButton>
      
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});