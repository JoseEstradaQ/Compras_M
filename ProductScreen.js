import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { GlobalStyles } from '../globalstyle';

export default function ProductScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={GlobalStyles.container}>
      <Image source={{ uri: product.image }} style={GlobalStyles.productImage} />
      <Text style={GlobalStyles.title}>{product.name}</Text>
      <Text style={GlobalStyles.text}>{product.description}</Text>
      <Text style={GlobalStyles.price}>{product.price}</Text>
      <Button title="Añadir al Carrito" onPress={() => { /* Lógica para añadir al carrito */ }} color="#800080" />
    </View>
  );
}