//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { List, Divider, Title } from 'react-native-paper';

import styles from '../styles/ManipulandoStyles';

// create a component
class Perfil extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title style={styles.titulo}>Dados Pessoais</Title>
        <Image source={require('../image/avatar.png')} style={styles.qrCode} />
        <TextInput style={styles.input} editable={false} value="Fulano" placeholder="" />
        <TextInput style={styles.input} editable={false} value="154.654.987-09" placeholder="" />
        <TextInput style={styles.input} editable={false} value="fulano@gmail.com" placeholder="" />
        <TextInput style={styles.input} editable={false} value="Rua Parambu 59" placeholder="" />
        <TextInput style={styles.input} editable={false} value="Salvador - BA" placeholder="" />
        <TouchableOpacity
          style={styles.text} onPress={() => { this.props.navigation.navigate('Home') }}>
          <Text style={styles.text}>Voltar para a Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//make this component available to the app
export default Perfil;
