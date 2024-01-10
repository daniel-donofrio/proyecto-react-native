import { Button, Text, View } from 'react-native';
import { counterReducer, decrement, increment } from '../counter';
import { useDispatch, useSelector } from 'react-redux';

export default function Counter() {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch();

    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Contador: {count}</Text>
                <Button title="Incrementar" onPress={() => dispatch(increment())} />
                <Button title="Decrementar" onPress={() => dispatch(decrement())} />
        </View>
    )
}