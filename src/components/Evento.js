//import liraries
import * as React from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Evento() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
        latitude: -12.9789048,
        longitude: -38.5052671,
        latitudeDelta: 0,
        longitudeDelta: 0.05,
      }} >
        <Marker
          coordinate={{ latitude: -12.9789048, longitude: -38.5052671 }}
          title="Brasil x Argentina"
          description="Arena Fonte Nova"
        />
      </MapView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});