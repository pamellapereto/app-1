import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import SoundButton from '../components/SoundButton';
import { FontAwesome } from '@expo/vector-icons';

export default function TelaCampainha() {
  
    return (
      <View>
        <Cabecalho />
        

   { /* <TouchableOpacity style={editar.botaoVoltar} onPress={alert}>
          <FontAwesome name="arrow-circle-left" size={45} style={editar.iconeVoltar} />
        </TouchableOpacity>*/}

        <SoundButton  />
      </View>
    );
  }


/*const editar = StyleSheet.create({
  botaoVoltar: {

    

    alignItems: 'center',

    marginLeft:20,

    width: 45,

    height: 45,
  },
  iconeVoltar:{

borderWidth:10,

borderRadius:25,

paddingLeft:3,
  },
  
});*/
