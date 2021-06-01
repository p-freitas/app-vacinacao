//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { List, Divider, Title } from 'react-native-paper';

import styles from '../styles/ManipulandoStyles';

// create a component
class Perfil extends Component {
  static navigationOptions = {
    drawerLabel: "Perfil",

    // drawerIcon: ({ focused, tintColor }) => (
    //     //define style 
    //     <Image
    //         style={styles.logo}
    //         style={{ width: 40, height: 40 }}
    //         source={require('../image/home.png')}
    //     />

    // )
  }

  render() {
    const { navigation } = this.props;
    const nameUser = navigation.getParam('nome');
    const lastNameUser = navigation.getParam('sobrenome');
    const completeName = nameUser + " " + lastNameUser;

    return (
      <View style={styles.container}>
        <Title style={styles.titulo}>Dados Pessoais</Title>
        <Image source={require('../image/avatar.png')} style={styles.qrCode} />
        <TextInput style={styles.input} editable={false} value="Pedro Freitas" placeholder="Informe seu nome completo" />
        <TextInput style={styles.input} editable={false} value="154.654.987-09" placeholder="Informe seu CPF" />
        <TextInput style={styles.input} editable={false} value="pedro.freitas@gmail.com" placeholder="Informe seu e-mail" />
      </View>
    );
  }
}

//make this component available to the app
export default Perfil;
