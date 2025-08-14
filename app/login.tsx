import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Icon, Text, TextInput, useTheme } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import usuarioData from '../Usuarios.json';

export default function LoginScreen(): JSX.Element {
  const theme = useTheme();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const { usuario } = usuarioData;

    if (!email.trim() || !password.trim()) {
      Toast.show({
        type: 'info',
        text1: 'Campos vacíos',
        text2: 'Por favor ingresa tu correo y contraseña',
        position: 'bottom',
      });
      return;
    }

    if (
      email.trim().toLowerCase() === usuario.email.toLowerCase() &&
      password === usuario.password
    ) {
      Toast.show({
        type: 'success',
        text1: '¡Bienvenido!',
        text2: `${usuario.nombre} ${usuario.apellido}`,
        position: 'bottom',
      });

      // Enviamos datos como string
      router.push({
        pathname: '/perfil',
        params: { usuario: JSON.stringify(usuario) },
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error de inicio de sesión',
        text2: 'Correo o contraseña incorrectos',
        position: 'bottom',
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Icon
          source="account-circle"
          size={80}
          color={theme.colors.primary}
          style={styles.icon}
        />

        <Text variant="headlineMedium" style={styles.title}>
          Bienvenido de nuevo
        </Text>
        <Text style={styles.subtitle}>
          Ingresa tus datos para acceder a tu cuenta
        </Text>

        <TextInput
          label="Correo electrónico"
          mode="outlined"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          left={<TextInput.Icon icon="email" />}
          style={styles.input}
        />

        <TextInput
          label="Contraseña"
          mode="outlined"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          left={<TextInput.Icon icon="lock" />}
          right={
            <TextInput.Icon
              icon={showPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          style={styles.input}
        />

        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.button}
          icon="login"
        >
          Iniciar sesión
        </Button>
      </View>

      <Toast />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 24,
  },
  container: {
    alignItems: 'stretch',
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 12,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    textAlign: 'center',
    color: '#555',
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
    paddingVertical: 6,
    borderRadius: 8,
  },
});
