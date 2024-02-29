import { ImageBackground } from "react-native";
import { styleContainer } from "../../styles/globalstyle";

export function Slide1(){
    const fita = require('../../assets/fita.png') 
    return (
        <ImageBackground source={fita} style={styleContainer.container}>
            
        </ImageBackground>
    )

}





