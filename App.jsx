import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AutorScreen from './app/screens/AutorScreen';
import HelpScreen from './app/screens/HelpScreen';
import HomeScreen from './app/screens/HomeScreen';
import ItemDetailScreen from './app/screens/ItemDetailScreen';
import ItemListScreen from './app/screens/ItemListScreen';
import KnowledgeScreen from './app/screens/KnowledgeScreen';
import LoginScreen from './app/screens/LoginScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ServicesScreen from './app/screens/ServicesScreen';
import SettingsScreen from './app/screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Autor" component={AutorScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Conocimientos" component={KnowledgeScreen} />
        <Stack.Screen name="Elementos" component={ItemListScreen} />
        <Stack.Screen name="Detalle" component={ItemDetailScreen} />
        <Stack.Screen name="Registro" component={RegisterScreen} />
        <Stack.Screen name="Configuración" component={SettingsScreen} />
        <Stack.Screen name="Perfil" component={ProfileScreen} />
        <Stack.Screen name="Servicios" component={ServicesScreen} />
        <Stack.Screen name="Ayuda" component={HelpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
