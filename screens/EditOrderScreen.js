import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductDetail = props => {
  return (
    <View style={styles.screen}>
      <Text> ProductDetail screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProductDetail;
