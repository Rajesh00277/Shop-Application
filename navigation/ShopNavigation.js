import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ProductListScreen from '../screens/ProductListScreen';

const ProductsNavigator = createStackNavigator({
  ProductList: ProductListScreen,
});

export default createAppContainer(ProductsNavigator);
