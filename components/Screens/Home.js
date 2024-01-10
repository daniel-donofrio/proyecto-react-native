import React from "react";
import { Button, Text, View } from "react-native";

export default function Home ({navigation}){
    
    const nombreDeUsuario = 'Usuario1'

    const goToProfileScreen = () => {
        navigation.navigate('Perfil', {
            username: nombreDeUsuario,
            email: 'usuario1@gmail.com'
        })
    };

    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Bienvenido al Inicio de Mi App</Text>
            <Button onPress={goToProfileScreen} title="Ir al Perfil" />
        </View>
    )
}