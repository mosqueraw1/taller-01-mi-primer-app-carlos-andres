import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Button, Text, useTheme } from 'react-native-paper';
import productosData from '../../productos.json';

export default function DetalleProducto() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const theme = useTheme();

  const producto = productosData.find((p) => p.id.toString() === id);

  if (!producto) {
    return (
      <View style={styles.centered}>
        <Text variant="titleMedium" style={{ color: theme.colors.error }}>
          No se encontró el producto.
        </Text>
        <Button mode="contained" onPress={() => router.back()} style={{ marginTop: 12 }}>
          Volver
        </Button>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Barra superior */}
      <Appbar.Header mode="center-aligned" style={{ backgroundColor: theme.colors.primary }}>
        <Appbar.BackAction color="#fff" onPress={() => router.back()} />
        <Appbar.Content title={producto.titulo} titleStyle={{ color: '#fff' }} />
      </Appbar.Header>

      {/* Contenido scrollable */}
      <ScrollView style={{ flex: 1 }} bounces={false}>
        {/* Imagen grande en la parte superior */}
        <Image source={{ uri: producto.imagen }} style={styles.image} resizeMode="cover" />

        {/* Contenido */}
        <View style={styles.content}>
          <Text variant="headlineSmall" style={styles.title}>
            {producto.titulo}
          </Text>

          <Text style={styles.description}>{producto.descripcion}</Text>

          <Button
            mode="contained-tonal"
            icon="arrow-left"
            style={styles.backButton}
            onPress={() => router.back()}
          >
            Volver a la lista
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300, // Imagen grande ocupando buena parte de la pantalla
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20, // solapa la imagen para un efecto moderno
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 24,
    color: '#555',
    lineHeight: 22,
  },
  backButton: {
    alignSelf: 'center',
    marginTop: 8,
    borderRadius: 8,
  },
});
