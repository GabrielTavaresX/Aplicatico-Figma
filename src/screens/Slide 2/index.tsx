import { ImageBackground,Text, View } from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import { styles, stylesz, stylesy } from "./style"
import React from "react";


export function Slide2(){
    const fundo = require('../../assets/fundo.png') 
    return (
      <>
        <ImageBackground source={fundo} style={styleContainer.container}>
          <View style={stylesz.view}>
            
          <Text style={styles.text}>Insira seus dados para a criação da conta</Text>
          <Text style={stylesy.text}>E-mail-</Text>
          <Text style={stylesy.text}>Nome- </Text>
          <Text style={stylesy.text}>Senha- </Text>
          <Text style={stylesy.text}>Já possui conta clique aqui- </Text>
          </View>
        </ImageBackground>
      </>
    )
  
    

}
