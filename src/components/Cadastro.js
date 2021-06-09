//import liraries
import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'

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
        <TextInputMask
          style={styles.input}
          placeholder="Informe seu CPF"
          type={'cpf'}
          value={this.state.cpf}
          onChangeText={text => {
            this.setState({
              cpf: text
            })
          }}
        />
        <TextInput style={styles.input} onChangeText={text => this.state.email = text} placeholder="Informe seu e-mail" />
        <TextInputMask
          style={styles.input}
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) '
          }}
          value={this.state.international}
          onChangeText={text => {
            this.setState({
              international: text
            })
          }}
          placeholder="Digite seu número de celular"
        />
        <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} />
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






