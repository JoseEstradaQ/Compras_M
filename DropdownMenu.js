import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GlobalStyles } from '../globalstyle';
import { useNavigation } from '@react-navigation/native';

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (screen) => {
    setIsOpen(false);
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu} style={styles.button}>
        <Text style={styles.buttonText}>Menú</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => handleNavigate('Favorites')}>
            <Text style={styles.menuItem}>Favoritos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigate('Cart')}>
            <Text style={styles.menuItem}>Carrito</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#800080',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  menu: {
    marginTop: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  menuItem: {
    padding: 10,
    fontSize: 16,
    color: '#800080',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
