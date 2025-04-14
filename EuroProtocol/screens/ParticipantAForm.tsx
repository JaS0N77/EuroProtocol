import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'ParticipantA'>;

export default function ParticipantAForm({ navigation }: Props) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    phone: '',
    carModel: '',
    carNumber: ''
  });

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text>Імʼя:</Text>
      <TextInput style={{ borderWidth: 1, marginBottom: 10 }} value={form.firstName} onChangeText={text => setForm({ ...form, firstName: text })} />
      <Text>Прізвище:</Text>
      <TextInput style={{ borderWidth: 1, marginBottom: 10 }} value={form.lastName} onChangeText={text => setForm({ ...form, lastName: text })} />
      <Text>Дата народження:</Text>
      <TextInput style={{ borderWidth: 1, marginBottom: 10 }} value={form.dob} onChangeText={text => setForm({ ...form, dob: text })} />
      <Text>Телефон:</Text>
      <TextInput style={{ borderWidth: 1, marginBottom: 10 }} value={form.phone} onChangeText={text => setForm({ ...form, phone: text })} keyboardType="phone-pad" />
      <Text>Модель авто:</Text>
      <TextInput style={{ borderWidth: 1, marginBottom: 10 }} value={form.carModel} onChangeText={text => setForm({ ...form, carModel: text })} />
      <Text>Номер авто:</Text>
      <TextInput style={{ borderWidth: 1, marginBottom: 10 }} value={form.carNumber} onChangeText={text => setForm({ ...form, carNumber: text })} />

      <Button title="Далі → Учасник Б" onPress={() => navigation.navigate('ParticipantB')} />
    </ScrollView>
  );
}
