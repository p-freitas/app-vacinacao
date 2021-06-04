import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './src/components/Login';
import Cadastro from './src/components/Cadastro';
import Home from './src/components/Home';
import Perfil from './src/components/Perfil';
import Evento from './src/components/Evento';
import EsqueceuSenha from './src/components/EsqueceuSenha';
import Cadastrado from './src/components/Cadastrado';
import SenhaAlterada from './src/components/SenhaAlterada';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: 'white',
      tabBarOptions: {
        showIcon: true
      },
      labelStyle: {
        fontSize: 12
      },
      tabStyle: {
        backgroundColor: '#4cb3fc'
      }
    }}
    >
      <Tab.Screen name="Home" component={Home} options={() => ({
        tabBarIcon: () => (
          <Image
            source={require('./src/image/home.png')}
            style={{ height: 20, width: 20 }}
          />
        )
      })} />
      <Tab.Screen name="Perfil" component={Perfil} options={() => ({
        tabBarIcon: () => (
          <Image
            source={require('./src/image/perfil.png')}
            style={{ height: 25, width: 25 }}
          />
        )
      })} />
      <Tab.Screen name="Evento" component={Evento} options={() => ({
        tabBarIcon: () => (
          <Image
            source={require('./src/image/evento.png')}
            style={{ height: 30, width: 20 }}
          />
        )
      })} />
      <Tab.Screen name="Login" component={Login} options={() => ({
        tabBarVisible: false,
        tabBarButton: () => null,
      })} />
      <Tab.Screen name="Cadastro" component={Cadastro} options={() => ({
        tabBarVisible: false,
        tabBarButton: () => null,
      })} />
      <Tab.Screen name="EsqueceuSenha" component={EsqueceuSenha} options={() => ({
        tabBarVisible: false,
        tabBarButton: () => null,
      })} />
      <Tab.Screen name="Cadastrado" component={Cadastrado} options={() => ({
        tabBarVisible: false,
        tabBarButton: () => null,
      })} />
      <Tab.Screen name="SenhaAlterada" component={SenhaAlterada} options={() => ({
        tabBarVisible: false,
        tabBarButton: () => null,
      })}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}