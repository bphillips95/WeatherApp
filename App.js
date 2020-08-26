import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const URL = `http://api.weatherapi.com/v1/current.json?key=${REACT_APP_WEATHER_API_KEY}&q=New York`
  const [state, setstate] = useState([])

  fetch(URL).then(r => r.json()).then(data => {
   console.log
  })

  return (
    <View style={styles.container}>
      <Text>This is App file!</Text>
  <Text>Currently in NYC the weather is {}</Text>
      <StatusBar style="auto" />
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
