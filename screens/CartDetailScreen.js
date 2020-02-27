import React from ' react';
import { View, Text, StyleSheet } from 'react-native';

const CartDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text> This is cart screen. Changes is coming up </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default CartDetailScreen;
