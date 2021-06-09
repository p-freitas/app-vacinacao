//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { List, Divider, Title } from 'react-native-paper';

import styles from '../styles/ManipulandoStyles';

// create a component
class Cadastrado extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../image/success.png')} style={styles.success} />
        <Text style={styles.texto2}>Bem-Vindo! Seu cadastro foi concluído com sucesso.</Text>
        <Text style={styles.texto2}>Você receberá um e-mail solicitando as informações da sua vacinação em breve.</Text>
        <TouchableOpacity
          style={styles.text} onPress={() => { this.props.navigation.navigate('Login') }}>
          <Text style={styles.text}>Voltar para o Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//make this component available to the app
export default Cadastrado;
