import { ImageBackground,Text, View,TextInput } from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import { styles, stylesz, stylesy } from "./style"
import { ButtonSlide } from "../../components/ButtonSlide"
import { IPagina } from "../../../App";
import React from "react";


export function Slide1({setPageI}:IPagina){
    const fundo = require('../../assets/fundo.png') 
    return (
      <>
        <ImageBackground source={fundo} style={styleContainer.container}>
          <View style={stylesz.view}>
            
          <Text style={styles.text}>Bem vindo ao seu aplicativo de resumos dos melhores filmes :)</Text>
          <Text style={stylesy.text}>Preencha abaixo:</Text>
          <Text style={stylesy.text}>G-mail- </Text>
          <View style={stylesz.box}>
            <TextInput></TextInput>
          </View>
          <Text style={stylesy.text}>Senha- </Text>
          <View style={stylesz.box}>
          <TextInput></TextInput>
          </View>
          <View style={stylesz.buttonContainer}>
                    <ButtonSlide onPressI={() => setPageI(1)} />
                    <ButtonSlide onPressI={() => setPageI(2)} />
          </View>

          </View>
        </ImageBackground>
      </>
    )
  
    

}





