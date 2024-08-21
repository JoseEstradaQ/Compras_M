import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { GlobalStyles } from '../globalstyle';

export default function FavoritesScreen({ navigation }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((fav) => {
          const daysDiff = (new Date() - new Date(fav.addedAt)) / (1000 * 60 * 60 * 24);
          return daysDiff < 3;
        })
      );
    }, 1000 * 60 * 60 * 24);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={GlobalStyles.container}>
      <FlatList
        data={favorites}
        renderItem={({ item }) => (
          <View style={GlobalStyles.favoriteItem}>
            <Text style={GlobalStyles.text}>{item.name}</Text>
            <Text style={GlobalStyles.price}>{item.price}</Text>
            <Button title="Eliminar" onPress={() => { /*  eliminar de favoritos */ }} color="#800080" />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );                                        
} 