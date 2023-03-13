import * as React from "react";
import{Text, View, StyleSheet} from "react-native";


class Cabecalho extends React.Component{
render(){
return(
<View style = {
  design.cabecalho
}>
<Text style ={design.titulo}>olimpiadas de ciencias </Text>


</View>
)
  
}

}


const design =  StyleSheet.create({
cabecalho:{
  backgroundColor:"#ffffff"
},
titulo:{
padding:10,
color:"black",
fontSize:30,
fontWeight:"bold",
textAlign:"center",

backgroundColor: '#b0ddc8',
marginTop:50,
margin:10,
fontFamily:"NerkoOne_400Regular"
},

})

export default Cabecalho;