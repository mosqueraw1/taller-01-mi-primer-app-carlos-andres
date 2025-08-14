import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Badge, Icon, Text, useTheme } from 'react-native-paper';

export default function ServiciosScreen(): JSX.Element {
  const theme = useTheme();

  const servicios = [
    { id: '1', nombre: 'Servicio de Notificación Telefónica', descripcion: 'Abrir servicios telefónicos para alertas de dispositivos para mejorar la notificación en tiempo real de', icon: 'phone', color: '#4CAF50' },
    { id: '2', nombre: 'Protección inteligente', descripcion: 'Aplicación de alarma para el hogar, protegiendo la seguridad de tu hogar', icon: 'shield-home', color: '#2196F3' },
    { id: '3', nombre: 'Compras', descripcion: 'Encuentra rápidamente productos y marcas, descubre más productos inteligentes', icon: 'cart', color: '#FF9800' },
    { id: '4', nombre: 'Maestro de Iluminación', descripcion: 'Proporcione soluciones de iluminación personalizadas y basadas en IA', icon: 'lightbulb', color: '#9C27B0', nuevo: true },
    { id: '5', nombre: 'Asistente de voz de terceros', descripcion: 'Utiliza altavoces inteligentes y otros dispositivos con control de voz', icon: 'microphone', color: '#607D8B' },
  ];

  const renderItem = ({ item }: any) => (
    <View style={styles.item}>
      {/* Icono circular */}
      <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
        <Icon source={item.icon} size={22} color="white" />
      </View>

      {/* Texto */}
      <View style={styles.textContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.nombre}</Text>
          {item.nuevo && <Badge style={styles.badge}>New</Badge>}
        </View>
        <Text style={styles.description}>{item.descripcion}</Text>
      </View>

      {/* Flecha */}
      <Icon source="chevron-right" size={22} color="#ccc" />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Icon source="home" size={22} color={theme.colors.primary} />
        <Text style={styles.headerTitle}>Lista de servicios</Text>
        <Icon source="cog" size={22} color={theme.colors.primary} />
      </View>

      {/* Lista */}
      <FlatList
        data={servicios}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between',
  },
  headerTitle: { fontSize: 22, fontWeight: 'bold' },
  list: { paddingHorizontal: 16 },
  separator: { height: 1, backgroundColor: '#eee', marginVertical: 8 },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  iconContainer: {
    width: 38,
    height: 38,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textContainer: { flex: 1 },
  titleRow: { flexDirection: 'row', alignItems: 'center' },
  title: { fontSize: 16, fontWeight: '600', flexShrink: 1 },
  badge: {
    backgroundColor: '#FF5722',
    marginLeft: 6,
    fontSize: 10,
  },
  description: { fontSize: 13, color: '#777', marginTop: 2 },
});
