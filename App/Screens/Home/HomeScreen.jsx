import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from './Header';
import Colors from '../../Utils/Colors';
import Sliders from './Sliders';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation()
  
  return (
    <View style={styles.container}>
      <Header/>
      <Sliders/>
      <TouchableOpacity style={styles.bouton} onPress={() => navigation.push('journal')}>
        <Text style={styles.textBouton}>VOIR TOUS</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.rose
    
  },
  bouton: {
    backgroundColor: Colors.blanc,
    color: Colors.orange,
    padding: 10,
    marginTop: 40,
    borderRadius: 99,
    textAlign: 'center',
    width: '70%',
    alignSelf: 'center'
  },
  textBouton: {
    color: Colors.orange,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '900',
    fontFamily: 'Museo'
  }
})