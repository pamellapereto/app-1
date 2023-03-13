import * as React from 'react';
import {TouchableOpacity, StyleSheet ,Text,View} from 'react-native';
import {Audio} from "expo-av"


class SoundButton extends React.Component {
   tocarMusica = async () => {
     await Audio.Sound.createAsync(
    {uri:'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
    {shouldPlay:true}
     );

  }

  render(){
    return (
      <View>
      <TouchableOpacity style ={[editar.botao,{backgroundColor:"#228B22"}]} onPress={this.tocarMusica}>
<Text style={editar.txtBotao}>pressionar</Text>

      </TouchableOpacity>
      </View>
    );

}

}

const editar = StyleSheet.create({
botao:  {

marginTop:170,
width: 160,
height: 160,
borderRadius : 100,
marginLeft:115,
 justifyContent: "center", 
 alignItems: "center",
},
txtBotao:{
fontSize:30,
fontFamily:"NerkoOne_400Regular",
},


})

export default SoundButton