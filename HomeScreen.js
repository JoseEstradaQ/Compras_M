import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import CompraCard from '../components/CompraCard';
import DropdownMenu from '../components/DropdownMenu';
import { GlobalStyles } from '../globalstyle';

const sections = [
  { id: '1', name: 'Hogar', products: [] },
  { id: '2', name: 'Tecnología', products: [] },
  { id: '3', name: 'Accesorios', products: [] },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={GlobalStyles.container}>
      <DropdownMenu navigation={navigation} />
      <FlatList
        data={sections}
        renderItem={({ item }) => (
          <View>
            <Text style={GlobalStyles.sectionTitle}>{item.name}</Text>
            <FlatList
              horizontal
              data={item.products}
              renderItem={({ item }) => (
                <CompraCard product={item} navigation={navigation} />
              )}
              keyExtractor={(product) => product.id}
            />
          </View>
        )}
        keyExtractor={(section) => section.id}
      />
    </View>
  );
}
