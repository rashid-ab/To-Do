import  React,{FC,useState}  from "react";
import { StyleSheet, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useDispatch,useSelector } from "react-redux";
import {ADD_TASK} from '../redux/action'

const List:FC=() => {
  const [isPendingSelected,setisPendingSelected]=useState(true)
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.task)
  const setSelection = (index) =>{
      tasks[index].status=true;
      dispatch({
        type:ADD_TASK,
        payload:tasks
      })
      console.log(tasks[index])
  }
  return (
    <View style={styles.container}>
      <View style={styles.wrapContainer}>
        <Text style={[styles.title,{marginBottom:tasks.length==0?40:tasks[0].status?0:40}]}>Completed Tasks</Text>
        {tasks.map((item)=>(
          item.status &&
          <View style={[styles.listitem]}>
              <Checkbox
                  value={isPendingSelected}
                  color='#4630EB'
                  disabled 
                  onValueChange={setSelection}
                  style={styles.checkbox}
              />
            <Text style={styles.label}>{item.title}</Text>
          </View>
        ))
      }
      <Text style={styles.title}>Pending Tasks</Text>
      {tasks.map((item,index)=>(
          !item.status &&
          <View style={styles.listitem}>
              <Checkbox
                  // value={isSelected}
                  color='#4630EB'
                  onValueChange={()=>{setSelection(index)}}
                  style={styles.checkbox}
              />
            <Text style={styles.label}>{item.title}</Text>
          </View>
      ))
    }
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
    padding:10,
  },
  title:{
    fontSize:18,
    fontWeight:'bold'
  },
  listitem:{
    flexDirection: "row",
    marginVertical: 10,
  },
  checkbox: {
    alignSelf: "center",
    borderRadius:7,
  },
  label: {
    margin: 8,
  },
});
