//import liraries
import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'

import styles from '../styles/ManipulandoStyles';

// create a component
class EsqueceuSenha extends Component {

  state = {
    email: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../image/logopng.png')} style={styles.logo} />
        <Text style={styles.titulo}>Alterar Senha</Text>
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
        <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} />
        <TextInput style={styles.input} placeholder="Digite sua senha novamente" secureTextEntry={true} />
        <TouchableOpacity
          style={styles.button} onPress={() => { this.props.navigation.navigate('SenhaAlterada') }}>
          <Text style={styles.buttonText}>Trocar Senha</Text>
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
export default EsqueceuSenha;






