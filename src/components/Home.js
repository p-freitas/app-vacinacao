//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { List, Divider, Title } from 'react-native-paper';

import styles from '../styles/ManipulandoStyles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// create a component
class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.tag}>Imunizado</Text>
                <Image source={require('../image/QRCode.png')} style={styles.qrCode} />
                <Title style={styles.texto1}><Image source={require('../image/avatar.png')} style={styles.iconeAvatar} /> Fulano</Title>

                <List.Accordion title="1ª Dose" id="1" style={styles.list}>
                    <List.Item
                        title="Data da vacinação: 13/03/2021"
                        description="Vacina: Coronavac"
                        style={styles.listItem}
                        left={props => <Image source={require('../image/vacina.png')} style={styles.iconeVacina} />
                        }
                    />
                    <List.Item
                        title="Salvador"
                        description="Arena Fonte Nova"
                        style={styles.listItem}
                        left={props => <Image source={require('../image/gps.png')} style={styles.iconeVacina} />
                        }
                    />
                </List.Accordion>
                <Divider />
                <List.Accordion title="2ª Dose" id="2" style={styles.list}>
                    <List.Item
                        title="Data da vacinação: 12/04/2021"
                        description="Vacina: Coronavac"
                        style={styles.listItem}
                        left={props => <Image source={require('../image/vacina.png')} style={styles.iconeVacina} />
                        }
                    />
                    <List.Item
                        title="Salvador"
                        description="Arena Fonte Nova"
                        style={styles.listItem}
                        left={props => <Image source={require('../image/gps.png')} style={styles.iconeVacina} />
                        }
                    />
                </List.Accordion>

                <TouchableOpacity
                    style={styles.text} onPress={() => { this.props.navigation.navigate('Login') }}>
                    <Text style={styles.text}>Voltar para o Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

//make this component available to the app
export default Home;
