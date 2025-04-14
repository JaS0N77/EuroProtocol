import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export default function DamageScreen() {
  const [side, setSide] = useState('');
  const [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Сторона пошкодження (ліва/права/перед/зад)</Text>
      <TextInput style={styles.input} value={side} onChangeText={setSide} />

      <Text style={styles.label}>Короткий опис пошкодження</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        multiline
        value={description}
        onChangeText={setDescription}
      />

      <Button title="Завершити" onPress={() => alert('Протокол оформлено!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  label: { marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginTop: 4,
  },
});
