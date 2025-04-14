import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ParticipantAScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carNumber, setCarNumber] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Імʼя, прізвище</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Дата народження</Text>
      <TextInput style={styles.input} value={dob} onChangeText={setDob} />

      <Text style={styles.label}>Телефон</Text>
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />

      <Text style={styles.label}>Модель авто</Text>
      <TextInput style={styles.input} value={carModel} onChangeText={setCarModel} />

      <Text style={styles.label}>Номер авто</Text>
      <TextInput style={styles.input} value={carNumber} onChangeText={setCarNumber} />

      <Button title="Далі" onPress={() => navigation.navigate('ParticipantB')} />
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
