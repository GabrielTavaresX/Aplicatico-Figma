import { ImageBackground,Text, View } from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import { styles, stylesz, stylesy } from "./style"
import React from "react";


export function Slide1(){
    const fundo = require('../../assets/fundo.png') 
    return (
      <>
        <ImageBackground source={fundo} style={styleContainer.container}>
          <View style={stylesz.view}>
            
          <Text style={styles.text}>Bem vindo ao seu aplicativo de resumos dos melhores filmes</Text>
          <Text style={stylesy.text}>Selecione abaixo o que deseja:</Text>
          <Text style={stylesy.text}>Entrar- </Text>
          <Text style={stylesy.text}>Criar conta- </Text>
          </View>
        </ImageBackground>
      </>
    )
  
    

}





