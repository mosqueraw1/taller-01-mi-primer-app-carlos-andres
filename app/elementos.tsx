import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { Button, Card, Text, useTheme } from 'react-native-paper';
import productosData from '../productos.json'; // Importa tu JSON

export default function ProductosScreen(): JSX.Element {
  const theme = useTheme();
  const [productos, setProductos] = useState(productosData);

  const toggleDescripcion = (id: number) => {
    setProductos((prev) =>
      prev.map((prod) =>
        prod.id === id
          ? { ...prod, mostrarTodo: !prod.mostrarTodo }
          : prod
      )
    );
  };

  const renderItem = ({ item }: any) => (
    <Card style={styles.card} mode="elevated">
      {/* Imagen del producto */}
      <Image
        source={{ uri: item.imagen }}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Contenido */}
      <View style={styles.content}>
        <Text variant="titleMedium" style={styles.title}>
          {item.titulo}
        </Text>
        <Text style={styles.descripcion}>
          {item.mostrarTodo
            ? item.descripcion
            : `${item.descripcion.substring(0, 80)}...`}
        </Text>

        <Button
          mode="contained"
          onPress={() => toggleDescripcion(item.id)}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          {item.mostrarTodo ? 'Ver menos' : 'Ver más detalles'}
        </Button>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineMedium" style={styles.headerTitle}>
          Productos disponibles
        </Text>
        <Text style={styles.headerSubtitle}>
          {productos.length} artículos en catálogo
        </Text>
      </View>

      <FlatList
        data={productos}
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
    backgroundColor: '#f9f9f9',
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
    elevation: 3,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 180,
  },
  content: {
    padding: 12,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 6,
  },
  descripcion: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  button: {
    alignSelf: 'flex-start',
    borderRadius: 20,
  },
  buttonLabel: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});
