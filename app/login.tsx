import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Text, TextInput, useTheme } from 'react-native-paper';

export default function LoginScreen(): JSX.Element {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Icon source="login" size={48} color={theme.colors.primary} style={styles.icon} />
      <Text variant="headlineMedium" style={styles.title}>
        Iniciar Sesión
      </Text>

      <TextInput
        label="Correo electrónico"
        mode="outlined"
        keyboardType="email-address"
        left={<TextInput.Icon icon="email" />}
        style={styles.input}
      />

      <TextInput
        label="Contraseña"
        mode="outlined"
        secureTextEntry
        left={<TextInput.Icon icon="lock" />}
        style={styles.input}
      />

      <Button mode="contained" onPress={() => {}} style={styles.button}>
        Entrar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 16,
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
    marginTop: 8,
  },
});
