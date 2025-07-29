import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function AutorScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.avatar} />
      <Text style={styles.name}>Carlos Andrés Mosquera</Text>
      <Text style={styles.info}>Ingeniero en Desarrollo de Software</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
  name: { fontSize: 20, fontWeight: 'bold' },
  info: { fontSize: 16, color: 'gray' }
});