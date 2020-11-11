import React from 'react'
import {View, Text, StyleSheet } from 'react-native';

const Weather = ({props}) => {
    return (
        <View style={styles.container}>
      <Text>Weather Component!</Text>
      <Text>Currently in {props?.location?.name} the weather is {props?.current?.temp_f} degrees and {props?.current?.condition?.text}  </Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export default Weather;
