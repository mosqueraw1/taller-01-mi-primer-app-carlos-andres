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
    { title: 'Configuración', path: 'configuracion', icon: 'cog', color: '#607D8B' },,
    { title: 'Lista de elementos', path: 'elementos', icon: 'playlist-check', color: '#3F51B5' },
    { title: 'Autor: Carlos Andrés Mosquera Mosquera\nC.C. 1193509518', path: '', icon: 'account', color: '#009688', disabled: true },
  ];

  if (!showMenu) {
    return (
      <View style={styles.welcomeContainer}>
        <Text variant="headlineLarge" style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>¡Nos alegra tenerte aquí!</Text>

        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/8379/8379853.png' }}
          style={styles.image}
          resizeMode="contain"
        />

        <Button
          mode="contained"
          onPress={() => setShowMenu(true)}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Empezar
        </Button>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.menuContainer}>
      <View style={styles.header}>
        <Text variant="headlineMedium" style={styles.menuTitle}>Menú principal</Text>
        <Button mode="outlined" onPress={() => setShowMenu(false)}>Volver</Button>
      </View>

      {items.map((item) => (
        <Card
          key={item.title}
          style={[styles.card, { backgroundColor: item.color }]}
          onPress={() => {
            if (!item.disabled && item.path) router.push(`/${item.path}`);
          }}
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
  welcomeContainer: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  subtitle: {
    color: '#666',
    marginBottom: 24,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 32,
  },
  button: {
    borderRadius: 25,
    paddingVertical: 6,
    width: '70%',
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuContainer: {
    padding: 16,
    gap: 12,
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  menuTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
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
