import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { WEATHER_API_KEY} from 'react-native-dotenv'
import Weather from './components/Weather'

export default function App() {

  const URL = `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=New York`
  const [state, setstate] = useState([])

    // have to understand useEffect
  useEffect(() => {
    fetch(URL).then(r => r.json()).then(data => {
      setstate(data)
     })
  }, [])
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./images/cloudy.jpg')} />
      <Text>This is App file!</Text>
      <Weather props={state}/>
      <StatusBar style="auto" />
      <Button
  onPress={() => {
    alert('You tapped the button!');
  }}
  title="Press Me"
/>
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
  logo: {
    width: 136,
    height: 128,
  },
});
