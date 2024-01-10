import { View, Text } from 'react-native';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { counterReducer } from './counter';
import Posts from './components/clase-datos/Posts';
import BlocNotas from './components/clase-datos/BlocNotas';

const store = createStore(counterReducer);

export default function App() {

  return (
    // <Provider store={store}>
    //   <Counter />
    // </Provider>
    // <Posts />
    <BlocNotas />
    
  );
}