import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const CartScreen = () => {

  interface ShopItem {
      imageUrl: any,
      name: string,
      desc: string,
      price: number,
      id: number
    }

  const [cart, setCart] = useState<ShopItem[]>([]);

  useEffect(() => {
    fetchCart();
  }, []);

  console.log(cart);
  

  const fetchCart = async () => {
    try {
      const data = await AsyncStorage.getItem('cart');
      
      if (data !== null) {
        setCart(JSON.parse(data));
      }
    } catch (err: any) {
      console.error('Error fetching cart:', err.message);
    }
  }

  const removeFromCart = async (id: number) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    try {
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
    } catch (err: any) {
      console.error('Error removing from cart:', err.message);
    }
  }

  return (
    <View style={styles.container}>
      <Text>klkjdjfdklf</Text>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.imageUrl} style={{ width: 50, height: 50 }} />
            <View>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
              <Text>{item.desc}</Text>
              <Text>Price: ${item.price}</Text>
              <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                <Text style={styles.removeButton}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  removeButton: {
    color: 'red',
    marginTop: 5
  }
});

export default CartScreen;
