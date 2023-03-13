import * as react from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default function ContainerTelaInicial(props){
  return (
 <View>

      <TouchableOpacity
        style={[editar.botao, { backgroundColor: '#DC143C' }]}
        onPress={() => 
        props.botao.navigate("Buzzer")
        }>
        <Text style={editar.textoBotao}>Equipe 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[editar.botao, { backgroundColor: '#EE82EE' }]}
           onPress={() => 
        props.botao.navigate("Buzzer")
        }>
        <Text style={editar.textoBotao}>Equipe 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[editar.botao, { backgroundColor: '#7B68EE' }]}
           onPress={() => 
        props.botao.navigate("Buzzer")
        }>
        <Text style={editar.textoBotao}>Equipe 3</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[editar.botao, { backgroundColor: '#7CFC00' }]}
          onPress={() => 
        props.botao.navigate("Buzzer")
        }>
        <Text style={editar.textoBotao}>Equipe 4</Text>
      </TouchableOpacity>
      
 </View>
  )
}

const editar = StyleSheet.create({
  botao: {
    justifyContent: 'center', //Alinhamento do conteúdo que está dentro do botão

    alignSelf: 'center', //Alinhamento do próprio botão

    borderWidth: 2, //Largura da borda

    borderRadius: 20, //Arredondamento da bora

    marginTop: 22, //Margem acima do botão

    width: 150, //Largura

    height: 50, //Altura
  },

  textoBotao: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'NerkoOne_400Regular',
  },
});
