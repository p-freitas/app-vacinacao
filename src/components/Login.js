//import liraries
import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

import styles from '../styles/ManipulandoStyles';

// create a component
class Login extends Component {

  state = {
    nome: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../image/logopng.png')} style={styles.logo} />
        <TextInput style={styles.input} onChangeText={text => this.state.nome = text} placeholder="Informe seu CPF" />
        <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} />
        <TouchableOpacity
          style={styles.button} onPress={() => { this.props.navigation.navigate('Home', { 'nome': this.state.nome }) }}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.text} onPress={() => { this.props.navigation.navigate('Cadastro') }}>
          <Text style={styles.text}>Não tem login? Cadastre-se agora!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.text} onPress={() => { this.props.navigation.navigate('EsqueceuSenha') }}>
          <Text style={styles.text}>Esqueceu a senha? Clique aqui.</Text>
        </TouchableOpacity>
      </View>
    );
  };
}
//make this component available to the app
export default Login;






