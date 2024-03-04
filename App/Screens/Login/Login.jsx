import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors, { colors } from '../../Utils/Colors'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
 
WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={{alignItems: 'center'}}>
      <Image
      style={styles.image}
      source={require('../../../assets/Images/femme.png')}
      />
      <View style={styles.container}>
        <Text style={styles.titre}>Texte d'accroche</Text>
      <TouchableOpacity style={styles.bouton} onPress={onPress}>
        <Text style={styles.textBouton}>Commencer l'aventure</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        height: '40%',
        width: '40%',
    },
    container: {
      backgroundColor: Colors.rose,
      width: '100%',
      height: '70%',
      margin: 0,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50
  },
  titre: {
    color: Colors.blanc,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Museo'
  },
  bouton: {
    backgroundColor: Colors.blanc,
    color: Colors.orange,
    padding: 10,
    marginTop: 20,
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

