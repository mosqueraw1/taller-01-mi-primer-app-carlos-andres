import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card, IconButton, Text, useTheme } from 'react-native-paper';

export default function HomeScreen(): JSX.Element {
  const router = useRouter();
  const theme = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  const items = [
    { title: 'Inicio de sesión', path: 'login', icon: 'login', color: '#2196F3' },
    { title: 'Formulario de registro', path: 'registro', icon: 'account-plus', color: '#4CAF50' },
    { title: 'Perfil de usuario', path: 'perfil', icon: 'account-circle', color: '#9C27B0' },
    { title: 'Lista de servicios', path: 'servicios', icon: 'view-list', color: '#FF9800' },
    { title: 'Configuración', path: 'configuracion', icon: 'cog', color: '#607D8B' },
    { title: 'Detalle de elemento', path: 'detalle', icon: 'file-document', color: '#795548' },
    { title: 'Lista de elementos', path: 'elementos', icon: 'playlist-check', color: '#3F51B5' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Imagen de bienvenida */}
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/8379/8379853.png' }}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Título y botón */}
      <View style={styles.header}>
        <Text variant="headlineMedium" style={styles.title}>
          Pantalla de inicio
        </Text>
        <Button
          mode={showMenu ? 'outlined' : 'contained'}
          onPress={() => setShowMenu(!showMenu)}
          style={styles.toggleButton}
        >
          {showMenu ? 'Ocultar menú' : 'Mostrar menú'}
        </Button>
      </View>

      {/* Menú */}
      {showMenu &&
        items.map((item) => (
          <Card
            key={item.path}
            style={[styles.card, { backgroundColor: item.color }]}
            onPress={() => router.push(`/${item.path}`)}
          >
            <Card.Title
              title={item.title}
              titleStyle={styles.cardTitle}
              left={(props) => (
                <IconButton {...props} icon={item.icon} iconColor="white" />
              )}
            />
          </Card>
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 180,
    marginBottom: 16,
    borderRadius: 12,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  toggleButton: {
    borderRadius: 20,
  },
  card: {
    borderRadius: 12,
    elevation: 4,
  },
  cardTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
});
