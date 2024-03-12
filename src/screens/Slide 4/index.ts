import { ImageBackground,Text, View } from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import { styles, stylesz } from "./style"
import React from "react";


export function Slide2(){
    const fundo = require('../../assets/fundo.png') 
    return (
      <>
        <ImageBackground source={fundo} style={styleContainer.container}>
          <View style={stylesz.view}>
            
          <Text style={styles.text}>Selecione um filme para ver seu resumo:</Text>
          
          </View>
        </ImageBackground>
      </>
    )
  
    

}
