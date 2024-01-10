import React, { useState } from "react";
import Lista from "./Lista";
import { StyleSheet, View, Text, Button, StatusBar } from "react-native";

export default function Mensaje() {
    const [estaResaltado, setEstaResaltado] = useState(false);
  
    const cambiarEstilo = () => {
      setEstaResaltado(!estaResaltado);
    }
  
    return (
      <View style={styles.container}>
        <Text style={estaResaltado ? styles.mensajeResaltado : styles.mensaje}>Bienvenidos a React Native!</Text>
        <Button title='Cambiar Estilo' onPress={cambiarEstilo} />
        <Lista />
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FSFCFF'
    },
    mensaje: {
      fontSize: 18,
      color: '#333',
      marginBottom: 20
    },
    mensajeResaltado: {
      fontSize: 22,
      color: 'darkblue',
      fontWeight: 'bold',
      marginBottom: 20
    }
  });
  