import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, FlatList, TextInput, Button } from "react-native";

export default function BlocNotas() {
    const [note, setNote] = useState('');
    const [notes, setNotes] = useState([]);

    useEffect(()=>{
        retriveNotes();
    }, []);

    //obtener todas las notas
    const retriveNotes = async() => {
        const keys = await AsyncStorage.getAllKeys(); //obtener todas las llaves
        const filteredKeys = keys.filter(key=>key.startsWith('_note'));
        const storedNotes = await AsyncStorage.multiGet(filteredKeys);
        //recuperar las notas guardadas en memoria local
        setNotes(storedNotes.map(([key, value])=>({key, value})))
    }

    const addNote = async()=>{
        if(note){
            const key = `_note${Date.now()}`;
            await AsyncStorage.setItem(key, note);
            retriveNotes();
            setNote('');
        }
    }

    const deleteNote = async(key)=>{
        if(key){
            try{
            await AsyncStorage.removeItem(key)
            retriveNotes();
            } catch(error){
                console.log(error.message);
            }
            
        }
    }

    return (
        <View style={styles.container}>
           <Text style={styles.mainTitle}>Bloc de Notas</Text>
           <TextInput 
           placeholder="Escriba una nota..."
           value={note}
           onChangeText={text=>setNote(text)}
           style={styles.input}
           />
           <Button 
           title="Agregar Nota" 
           onPress={addNote} 
           style={styles.button}
           />
           <FlatList
           data={notes}
           keyExtractor={item=>item.key}
           renderItem={({item})=>(
            <View style={styles.noteConteiner}> 
                <Text style={styles.note}>{item.value}</Text>
                <Button 
                title="Eliminar" 
                color="red"
                onPress={()=>deleteNote(item.key)}
                />
            </View>
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainTitle: {
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },
    noteConteiner: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 10
    },
    note: {
        fontSize: 16,
        marginBottom: 5
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 5
    },
    button: {
        marginBottom: 20
    }
});