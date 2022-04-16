import  React,{FC,useState}  from "react";
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const List:FC=({title}) => {

  return (
    <View style={styles.container}>
      <View style={styles.wrapContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.listitem}>
            <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
            />
        <Text style={styles.label}>Do you like React Native?</Text>
      </View>
      </View>
    </View>
  );
}
export default List;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapContainer:{
    flex:1,
    padding:20
  },
  title:{
    fontSize:18,
    fontWeight:'bold'
  },
  listitem:{
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
