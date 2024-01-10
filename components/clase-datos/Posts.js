import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from "react-native";

export default function Posts() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getPosts = async () => {
        try{
            setIsLoading(true)
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(res.data)
        } catch(error){
            console.log(error.message);
        }finally{
            setIsLoading(false);
        }
    }
    useEffect(() => {
        getPosts();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>Posteos</Text>
            {isLoading? (
                <ActivityIndicator size={"large"} color={'#0fbbff'} />
            ) : (
                <FlatList 
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text>{item.body}</Text>
                    </View>
                )} />
            )}
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
    item: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 10
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold'
    } 
        
})
    