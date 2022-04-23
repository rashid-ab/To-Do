import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import List from '../components/list'
import { useSelector } from 'react-redux';

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapContainer}>
        <ScrollView >
              <List />
        </ScrollView>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Add Task')}}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapContainer:{
    flex:.95,
    padding:10
  },
  buttonView:{
    flexDirection:'row',
  },
  button:{
    flex:1,
    marginHorizontal:20,
    paddingVertical:15,
    borderRadius:15,
    backgroundColor:'#5CBC75',
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText:{
    color:'#fcfcfc'
  }
});
