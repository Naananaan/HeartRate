import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [limits, setLimits] = useState(null);

  const calculate = () => {
    const parsedAge = parseFloat(age);
    if (!isNaN(parsedAge) && parsedAge > 0) {
      const lower = (220 - parsedAge) * 0.65;
      const upper = (220 - parsedAge) * 0.85;
      setLimits(`${lower.toFixed(0)}-${upper.toFixed(0)}`);
    } else {
      setLimits(null);
      alert("Please enter a valid age.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Your Age</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType="numeric"
        placeholder=""
      />

      {limits && (
        <View style={styles.resultContainer}>
          <Text style={styles.result}>Limits</Text>
          <Text style={styles.result}>{limits} bpm</Text>
        </View>
      )}
            <Button title="CALCULATE" onPress={calculate} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 50,
  },
  label: {
    fontSize: 24,
    marginBottom: 8,
  },
  input: {
    height: 40,
    fontSize: 24,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  resultContainer: {
    marginTop: 50,
  },
  result: {
    fontSize: 24,
    marginTop: 8,
  },
});
