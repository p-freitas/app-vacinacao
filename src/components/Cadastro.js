//import liraries
import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

import styles from '../styles/ManipulandoStyles';

// create a component
class Cadastro extends Component {

  state = {
    nome: '',
    sobrenome: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../image/logopng.png')} style={styles.logo} />
        <Text style={styles.titulo}>Cadastre-se!</Text>
        <TextInput style={styles.input} onChangeText={text => this.state.nome = text} placeholder="Informe seu nome completo" />
        <TextInput style={styles.input} onChangeText={text => this.state.email = text} placeholder="Informe seu CPF" />
        <TextInput style={styles.input} onChangeText={text => this.state.email = text} placeholder="Informe seu e-mail" />
        <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} />
        <TextInput style={styles.input} placeholder="Digite sua senha novamente" secureTextEntry={true} />
        <TouchableOpacity
          style={styles.button} onPress={() => { this.props.navigation.navigate('Cadastrado', { 'nome': this.state.nome }) }}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.text} onPress={() => { this.props.navigation.navigate('Login') }}>
          <Text style={styles.text}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  };
}
//make this component available to the app
export default Cadastro;






