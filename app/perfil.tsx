import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Icon, Text, useTheme } from "react-native-paper";

export default function PerfilScreen() {
  const theme = useTheme();
  const router = useRouter();
  const { usuario } = useLocalSearchParams();
  const userData = usuario ? JSON.parse(usuario as string) : null;

  if (!userData) {
    return (
      <View style={styles.centerContainer}>
        <Text variant="titleLarge" style={{ marginBottom: 20 }}>
          No se encontraron datos de usuario
        </Text>
        <Button
          mode="contained"
          icon="login"
          onPress={() => router.push("/login")}
        >
          Ir al login
        </Button>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <Avatar.Image
          size={110}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          }}
          style={{ backgroundColor: theme.colors.primary }}
        />

        <Text variant="headlineMedium" style={styles.name}>
          {userData.nombre} {userData.apellido}
        </Text>
      </View>

      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.infoRow}>
            <Icon source="email" size={20} color={theme.colors.primary} />
            <Text style={styles.infoText}>{userData.email}</Text>
          </View>

          <View style={styles.infoRow}>
            <Icon source="account" size={20} color={theme.colors.primary} />
            <Text style={styles.infoText}>{userData.username}</Text>
          </View>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        icon="logout"
        buttonColor={theme.colors.error}
        style={styles.logoutButton}
        onPress={() => router.push("/login")}
      >
        Cerrar sesión
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    marginBottom: 25,
  },
  name: {
    marginTop: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    width: "100%",
    borderRadius: 12,
    elevation: 3,
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 30,
    width: "100%",
    borderRadius: 8,
    paddingVertical: 5,
  },
});
