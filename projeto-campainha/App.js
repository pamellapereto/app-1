import { useFonts, NerkoOne_400Regular } from '@expo-google-fonts/nerko-one'; 
import TelaInicial from './screens/TelaInicial'


import{NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import{createStackNavigator} from'@react-navigation/stack';

const Stack = createStackNavigator();

export default function App () {  

  var [fonteCarregada] = useFonts({
    NerkoOne_400Regular
  });

  if (!fonteCarregada) {
    return null;
  }


    return (

      <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial" screenOptions = {{headerShown : false}}>
      <Stack.Screen name="TelaInicial" component= {TelaInicial}/>
      </Stack.Navigator>
      </NavigationContainer>
    );
}

