//import liraries
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Login from './src/components/Login';
import Cadastro from './src/components/Cadastro';
import Home from './src/components/Home';
import Perfil from './src/components/Perfil';
import EsqueceuSenha from './src/components/EsqueceuSenha';

const MainDrawer = createDrawerNavigator(
  {
    Home: Home,
    Perfil: Perfil,
    Login: Login,
    Cadastro: Cadastro,
    EsqueceuSenha: EsqueceuSenha,
  },
  {
    //Prop 
    contentOptions: {
      //Sempre que a aba estiver ativa, manter essa cor
      activeTintColor: `#800000`,
      //Prop
      //Permite aumentar a fonte 
      labelStyle: {
        fontSize: 18
      }
    }
  }
)

export default createAppContainer(MainDrawer);





