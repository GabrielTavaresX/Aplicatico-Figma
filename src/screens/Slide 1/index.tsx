import { ImageBackground,View } from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import React from "react";


export function Slide1(){
    const fundo = require('../../assets/fundo.png') 
    return (
        <ImageBackground source={fundo} style={styleContainer.container}>
          <View>
            
          </View>
        </ImageBackground>
        
    )
  
    

}





