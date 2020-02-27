import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as font from 'expo-font';
import { AppLoading } from 'expo';

import ProductReducer from './store/reducers/product';
import ShopNavigation from './navigation/ShopNavigation';

const rootReducer = combineReducers({
  products: ProductReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  font.loadAsync({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onError={Error => console.log(Error)}
        onFinish={() => {
          setFontLoaded(true);
          console.log('Fonts loaded successfully');
        }}
      />
    );
  }
  return (
    <Provider store={store}>
      <ShopNavigation />
    </Provider>
  );
}
