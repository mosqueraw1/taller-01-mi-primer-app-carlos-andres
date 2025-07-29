import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-paper';

export default function ServiciosScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Icon source="view-list" size={40} style={styles.icon} />
      <Text style={styles.text}>Lista de servicios</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  icon: { marginBottom: 10 },
  text: { fontSize: 20 }
});
