import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Login from './App/Screens/Login/Login';
import { ClerkProvider, SignedIn, SignedOut, useClerk } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import TabNavigation from './App/Navigation/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './App/Screens/Home/HomeScreen';
import Colors from './App/Utils/Colors';
 
const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};


export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Jost': require('./assets/Fonts/Jost/Jost-VariableFont_wght.ttf'),
    'Museo': require('./assets/Fonts/MuseoModerno/MuseoModerno-VariableFont_wght.ttf'),
    'Quicksand': require('./assets/Fonts/Quicksand/Quicksand-VariableFont_wght.ttf')
  });
  //  const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded || fontError) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded, fontError]);

  // if (!fontsLoaded && !fontError) {
  //   return null;
  // }

  // const App = () => {
  //   const [user, setUser] = useState(null);
  //   const [loading, setLoading] = useState(true);
  
  //   useEffect(() => {
  //     const { user } = useClerk();
  //     setUser(user);
  //     setLoading(false);
  //   }, []);
  
  return (
    <ClerkProvider publishableKey='pk_test_ZnJhbmstY2ljYWRhLTQuY2xlcmsuYWNjb3VudHMuZGV2JA'
    tokenCache={tokenCache}>
      <View style={styles.container}>
        <SignedIn>
          {/* <Text>Bonjour {user.firstName} {user.lastName}</Text> */}
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.rose,
    fontFamily: 'Museo'
  }
});