//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { List, Divider, Title } from 'react-native-paper';

import styles from '../styles/ManipulandoStyles';

// create a component
class SenhaAlterada extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../image/success.png')} style={styles.success} />
        <Text style={styles.texto2}>Senha alterada com sucesso! Volte para a tela de login para continuar</Text>
        <TouchableOpacity
          style={styles.text} onPress={() => { this.props.navigation.navigate('Login') }}>
          <Text style={styles.text}>Voltar para o Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//make this component available to the app
export default SenhaAlterada;
