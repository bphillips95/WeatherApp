import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { WEATHER_API_KEY} from 'react-native-dotenv'
import Weather from './components/Weather'

export default function App() {

  const URL = `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=New York`
  const [state, setstate] = useState([])
console.log(URL)
    // have to understand useEffect
  useEffect(() => {
    fetch(URL).then(r => r.json()).then(data => {
      setstate(data)
     })
  }, [])
  console.log(state)
  return (
    <View style={styles.container}>
      <Text>This is App file!</Text>
  <Text>THis is {Weather}</Text>
  <Text>Currently in {state?.location?.name} the weather is {state?.current?.temp_f} degrees and {state?.current?.condition?.text}  </Text>
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
});
