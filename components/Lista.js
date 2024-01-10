import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export const Lista = () => {
        const listaDeCompras = [
            { id: 1, nombre: 'pan'},
            { id: 2, nombre: 'yogurt' },
            { id: 3, nombre: 'carne' }
        ]

  return (
    <View style={styles.listContainer}> 
        <Text style={styles.texto}>Lista de Compras</Text>
        <FlatList
            data={listaDeCompras}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <View style={styles.itemLista}>
                    <Text style={styles.itemTexto}>{item.nombre}</Text>
                </View>
            )} 
            />
    </View>
  );
}

const styles = StyleSheet.create({
    listContainer: {
        padding: 10,
        borderColor: 'black',
        borderWidth: 2,
        height: 200,
        width: 200,
        marginTop: 50
    },
    texto: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontSize: 17
    },
    itemTexto: {
        fontSize: 16
    },
    itemLista: {
        padding: 10,
        marginBottom: 1
    }
})

export default Lista;