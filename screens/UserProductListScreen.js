import React from ' react';
import { View, Text, StyleSheet } from 'react-native';

const UserProductListScreen = props => {
  return (
    <View style={styles.screen}>
      <Text> user orders screens. </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default UserProductListScreen;