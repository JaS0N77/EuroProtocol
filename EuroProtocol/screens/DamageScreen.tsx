import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Damage'>;

export default function DamageScreen({ navigation }: Props) {
  const [side, setSide] = useState('');
  const [description, setDescription] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <Text>Сторона пошкодження (наприклад, ліва, права, перед):</Text>
      <TextInput style={{ borderWidth: 1, marginBottom: 10 }} value={side} onChangeText={setSide} />

      <Text>Короткий опис пошкодження:</Text>
      <TextInput style={{ borderWidth: 1, marginBottom: 10, height: 80 }} multiline value={description} onChangeText={setDescription} />

      <Button title="Готово" onPress={() => alert('Протокол збережено!')} />
    </View>
  );
}
