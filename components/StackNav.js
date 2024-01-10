import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';
import Profile from './Screens/Profile';

const Stack = createStackNavigator();

export default function StackNav() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Inicio'>
        <Stack.Screen name='Inicio'component={Home} options={{title: 'Inicio'}}/>
        <Stack.Screen name='Perfil' component={Profile} options={{title: 'Perfil'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}