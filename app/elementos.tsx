import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { Button, Card, Text, useTheme } from 'react-native-paper';
import productosData from '../productos.json'; // 📂 Cambia la ruta si está en otra carpeta

export default function ProductosScreen(): JSX.Element {
  const theme = useTheme();
  const router = useRouter();

  const renderItem = ({ item }: any) => (
    <Card style={styles.card} mode="elevated">
      <Image source={{ uri: item.imagen }} style={styles.image} />
      <Card.Content>
        <Text variant="titleMedium" style={styles.title}>
          {item.titulo}
        </Text>
        <Text style={styles.description}>
          {item.descripcion.length > 80
            ? item.descripcion.substring(0, 80) + '...'
            : item.descripcion}
        </Text>
      </Card.Content>
      <Card.Actions>
        <Button
          mode="contained"
          onPress={() => router.push(`/producto/${item.id}`)}
        >
          Ver detalles
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineMedium" style={styles.headerTitle}>
          Lista de productos
        </Text>
        <Text style={styles.headerSubtitle}>
          {productosData.length} productos disponibles
        </Text>
      </View>

      <FlatList
        data={productosData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerSubtitle: {
    color: '#666',
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});
