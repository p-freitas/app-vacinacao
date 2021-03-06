//import liraries
import * as React from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Evento() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Evento</Text>
      <MapView style={styles.map} initialRegion={{
        latitude: -12.9789048,
        longitude: -38.5052671,
        latitudeDelta: 0,
        longitudeDelta: 0.05,
      }} >
        <Marker
          coordinate={{ latitude: -12.9789048, longitude: -38.5052671 }}
          title="Brasil x Argentina"
          description="Arena Fonte Nova (14h ~ 16h)"
        />
      </MapView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64bfff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').height) - 150,
  },
  titulo: {
    fontSize: 40,
    color: "white",
    textAlign: "center",
    marginTop: 50
  },
});