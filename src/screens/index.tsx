import { ScrollView, StyleSheet, Text, View } from 'react-native';
import List from '../components/list'
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapContainer}>
        <List title="Completed Tasks"/>
        <List title="Pending Tasks"/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  wrapContainer:{
    flex:1,
    padding:20
  }
});
