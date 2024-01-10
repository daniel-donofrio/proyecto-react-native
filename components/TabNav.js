import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './components/Screens/Profile';
import Home from './components/Screens/Home';
import StackNav from './components/StackNav';
import Options from './components/Screens/Options';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function TabNav() {

  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route})=>{
        tabBarIcon: ({focused, colro, size}) => {
          let iconName;

          switch(route.name){
            case 'Inicio': 
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Perfil':
              iconName = focused ? 'person' : 'person-outline'
              break;
            case 'Opciones':
              iconName = focused ? 'options' : 'options-outline'
              break;
            default: return;
          }
          return <Icon name={iconName} />

        }
      }}>
        <Tab.Screen name='Inicio' component={Home}/>
        <Tab.Screen name='Perfil' component={Profile}/>
        <Tab.Screen name='Opciones' component={Options}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}