//import liraries
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { Component } from 'react';

import Login from './src/components/Login';
import Cadastro from './src/components/Cadastro';
import Home from './src/components/Home';
import Perfil from './src/components/Perfil';
import Evento from './src/components/Evento';
import EsqueceuSenha from './src/components/EsqueceuSenha';
import Cadastrado from './src/components/Cadastrado';
import SenhaAlterada from './src/components/SenhaAlterada';

const Drawer = createDrawerNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Perfil" component={Perfil} />
          <Drawer.Screen name="Evento" component={Evento} />
          <Drawer.Screen name="Login" component={Login} options={{ drawerLabel: () => null }} />
          <Drawer.Screen name="Cadastro" component={Cadastro} options={{ drawerLabel: () => null }} />
          <Drawer.Screen name="EsqueceuSenha" component={EsqueceuSenha} options={{ drawerLabel: () => null }} />
          <Drawer.Screen name="Cadastrado" component={Cadastrado} options={{ drawerLabel: () => null }} />
          <Drawer.Screen name="SenhaAlterada" component={SenhaAlterada} options={{ drawerLabel: () => null }} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}


// const MainDrawer = createDrawerNavigator(
//   {
//     Home: Home,
//     Perfil: Perfil,
//     Login: Login,
//     Cadastro: Cadastro,
//     EsqueceuSenha: EsqueceuSenha,
//   },
//   {
//     //Prop 
//     contentOptions: {
//       //Sempre que a aba estiver ativa, manter essa cor
//       activeTintColor: `#800000`,
//       //Prop
//       //Permite aumentar a fonte 
//       labelStyle: {
//         fontSize: 18
//       }
//     }
//   }
// )

export default App;





