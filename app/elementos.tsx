import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Icon, List, Text } from 'react-native-paper';

const elementosFicticios = [
  { id: '1', nombre: 'Elemento A', icon: 'folder' },
  { id: '2', nombre: 'Elemento B', icon: 'file' },
  { id: '3', nombre: 'Elemento C', icon: 'image' },
  { id: '4', nombre: 'Elemento D', icon: 'email' },
  { id: '5', nombre: 'Elemento E', icon: 'calendar' },
];

export default function ElementosScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon source="playlist-check" size={40} style={styles.icon} />
        <Text variant="titleLarge" style={styles.title}>
          Lista de elementos
        </Text>
      </View>

      <FlatList
        data={elementosFicticios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={item.nombre}
            left={(props) => <List.Icon {...props} icon={item.icon} />}
          />
        )}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    marginBottom: 4,
  },
  title: {
    fontWeight: 'bold',
  },
});
