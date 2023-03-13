import Cabecalho from '../components/Cabecalho';
import ContainerTelaInicial from "../components/ContainerTelaInicial"
import TelaCampainha from './TelaCampainha';
import {View} from "react-native";

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function TelaInicial() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Inicio} />
        <Stack.Screen name="Buzzer" component={TelaCampainha} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Inicio({ navigation }) {
  return (
    <View>
      <Cabecalho />
      <ContainerTelaInicial botao= {navigation}/>
     
    </View>
  );
}

