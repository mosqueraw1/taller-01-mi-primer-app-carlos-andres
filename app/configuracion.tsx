import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-paper';

export default function ConfiguracionScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Icon source="cog" size={40} style={styles.icon} />
      <Text style={styles.text}>Configuración</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  icon: { marginBottom: 10 },
  text: { fontSize: 20 }
});
