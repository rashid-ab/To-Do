import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigations/index'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/redux/reducer';
export default function App() {
  const store = createStore(reducer);
  
  return (
    <NavigationContainer>
      <Provider store={store}>
          <Navigation />
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
