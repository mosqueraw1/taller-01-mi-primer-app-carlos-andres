import React, { useState } from 'react';
import { StyleSheet, Switch, TouchableOpacity, View } from 'react-native';
import { Divider, Icon, Text } from 'react-native-paper';

export default function ConfiguracionScreen(): JSX.Element {
  const [notificaciones, setNotificaciones] = useState(true);

  const Item = ({ icon, label, onPress, rightElement }: any) => (
    <TouchableOpacity style={styles.item} onPress={onPress} activeOpacity={0.6}>
      <View style={styles.itemLeft}>
        <Icon source={icon} size={24} color="#333" />
        <Text style={styles.itemText}>{label}</Text>
      </View>
      {rightElement || <Icon source="chevron-right" size={24} color="#999" />}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon source="arrow-left" size={24} color="#333" />
        <Text style={styles.headerTitle}>Ajustes</Text>
      </View>

      {/* Lista de opciones */}
      <View style={styles.list}>
        <Item icon="account" label="Cuenta" />
        <Divider />
        <Item
          icon="bell"
          label="Notificaciones"
          rightElement={
            <Switch
              value={notificaciones}
              onValueChange={setNotificaciones}
              thumbColor={notificaciones ? "#fff" : "#f4f3f4"}
              trackColor={{ false: "#ccc", true: "#4a90e2" }}
            />
          }
        />
        <Divider />
        <Item icon="shield-lock" label="Privacidad" />
        <Divider />
        <Item icon="lock" label="Seguridad" />
        <Divider />
        <Item icon="help-circle" label="Ayuda" />
      </View>

      {/* Cerrar sesión */}
      <TouchableOpacity style={styles.logoutBtn}>
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 12,
  },
  list: {
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#eee",
  },
  item: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
    marginLeft: 12,
  },
  logoutBtn: {
    marginTop: 30,
    alignSelf: "center",
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4a90e2",
  },
});
