import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors';

const Header = () => {
    const {user,isLoading} = useUser();
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/icon.png')} style={styles.logo} />
      <Text style={styles.titre}>Bonjour,{user.fullName}</Text>
      <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum vero error tenetur voluptatibus asperiores, dicta placeat culpa quaerat provident earum quas dolore odio fugiat sint impedit ullam sed quos nemo?</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    logo:{
        width:150,
        height:100
    },
    container:{
        alignItems:'center',
        marginTop:100
    },
    titre:{
        fontSize:20,
        color:Colors.blanc,
        fontWeight:'bold'
    }

})