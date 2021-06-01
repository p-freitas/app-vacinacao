import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64bfff',
    justifyContent: 'center',
    alignItems: 'center',

  },
  texto1: {
    color: '#f8f8ff',
    fontSize: 24,
    padding: 30,
    height: 100,
    textAlign: 'center',
    display: 'flex',
  },
  texto2: {
    color: '#fffaf0',
    fontSize: 16,
    padding: 30
  },
  texto3: {
    color: '#f0ffff',
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 2,
    padding: 30,
    backgroundColor: '#000000',
    borderRadius: 5,
    marginTop: 10,
  },

  texto4: {
    color: '#800000',
    fontSize: 12,
    textAlign: 'center',
    letterSpacing: 2,
  },

  button: {
    width: 300,
    height: 42,
    backgroundColor: '#292f76',
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',

  },

  logo: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },

  qrCode: {
    width: 250,
    height: 250,
  },

  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },

  text: {
    fontSize: 16,
    color: "white",
    textDecorationLine: "underline"
  },

  titulo: {
    fontSize: 32,
    color: "white"
  },

  list: {
    width: 350,
  },

  listItem: {
    backgroundColor: "white"
  },

  iconeVacina: {
    width: 40,
    height: 40
  },

  iconeAvatar: {
    width: 40,
    height: 40,
    marginTop: 15
  },

  view: {
    display: 'flex'
  },

  tag: {
    width: 150,
    height: 30,
    backgroundColor: '#02c698',
    borderRadius: 15,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 15
  }

});

//make this component available to the app
export default styles;