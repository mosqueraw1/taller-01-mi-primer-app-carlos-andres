import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ImageBackground, StyleSheet, View } from 'react-native';
import { Button, Card, Icon, Text, TextInput, useTheme } from 'react-native-paper';
import usuariosData from '../Usuarios.json';

export default function RegistroScreen(): JSX.Element {
  const theme = useTheme();
  const router = useRouter();

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const registrarUsuario = async () => {
    if (!nombre || !apellido || !correo || !username || !password) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    try {

      const guardados = await AsyncStorage.getItem('usuarios');
      let usuarios = guardados ? JSON.parse(guardados) : usuariosData;

      const existe = usuarios.some(
        (u) => u.usuario.username.toLowerCase() === username.toLowerCase()
      );

      if (existe) {
        Alert.alert('Advertencia', 'El nombre de usuario ya existe, elige otro.');
        return;
      }
      const nuevoUsuario = {
        usuario: {
          nombre,
          apellido,
          email: correo,
          username,
          password,
        },
        elementos: []
      };

      usuarios.push(nuevoUsuario);
      await AsyncStorage.setItem('usuarios', JSON.stringify(usuarios));

      Alert.alert('Éxito', 'Usuario creado con éxito', [
        { text: 'OK', onPress: () => router.replace('/login') }
      ]);

    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo registrar el usuario');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.imgur.com/4M7CG1j.jpeg' }}
      style={styles.background}
      blurRadius={3}
    >
      <View style={styles.overlay}>
        <Card style={styles.card}>
          <Card.Content>
            <Icon source="account-plus" size={56} color={theme.colors.primary} style={styles.icon} />
            <Text variant="headlineMedium" style={styles.title}>
              Registro de Usuario
            </Text>

            <TextInput
              label="Nombre"
              mode="outlined"
              value={nombre}
              onChangeText={setNombre}
              left={<TextInput.Icon icon="account" />}
              style={styles.input}
            />

            <TextInput
              label="Apellido"
              mode="outlined"
              value={apellido}
              onChangeText={setApellido}
              left={<TextInput.Icon icon="account" />}
              style={styles.input}
            />

            <TextInput
              label="Correo electrónico"
              mode="outlined"
              value={correo}
              onChangeText={setCorreo}
              keyboardType="email-address"
              left={<TextInput.Icon icon="email" />}
              style={styles.input}
            />

            <TextInput
              label="Nombre de usuario"
              mode="outlined"
              value={username}
              onChangeText={setUsername}
              left={<TextInput.Icon icon="account-circle" />}
              style={styles.input}
            />

            <TextInput
              label="Contraseña"
              mode="outlined"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              left={<TextInput.Icon icon="lock" />}
              style={styles.input}
            />

            <Button
              mode="contained"
              onPress={registrarUsuario}
              style={styles.button}
              labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
              contentStyle={{ paddingVertical: 6 }}
            >
              Registrarse
            </Button>
          </Card.Content>
        </Card>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  card: {
    paddingVertical: 20,
    borderRadius: 16,
    elevation: 4,
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 12,
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 12,
    borderRadius: 8,
  },
});
