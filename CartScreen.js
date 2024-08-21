import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { GlobalStyles } from '../globalstyle';

export default function CartScreen({ navigation }) {
  const cartItems = [];

  return (
    <View style={GlobalStyles.container}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={GlobalStyles.cartItem}>
            <Text style={GlobalStyles.text}>{item.name}</Text>
            <Text style={GlobalStyles.price}>{item.price}</Text>
            <Button title="Eliminar" onPress={() => { /* para eliminar del carrito */ }} color="#800080" />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button title="Proceder al Pago" onPress={() => { /* para proceder al pago */ }} color="#800080" />
    </View>
  );
}
