import React,{ useState,useRef } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { useSelector,useDispatch } from 'react-redux';
import {ADD_TASK} from '../redux/action'
export default function Create({navigation}) {
  const [task,setTask]= useState('');
  const [InputError,setInputerror]= useState(false);
  const scroll = useRef<KeyboardAwareScrollView | null>();
  const tasks = useSelector(state => state.task)
  const dispatch = useDispatch();
  const add_task = () =>{
    if(task==''){
       setInputerror(true);
       return;
    }
    tasks.push({
        title:task,
        status:false,
    })
    dispatch({
      type:ADD_TASK,
      payload:tasks
    })
    setInputerror(false);
    setTask('')
    navigation.goBack()
    }
  return (
    
      <View style={styles.container}>
         <View style={styles.wrapContainer}>
            <Text style={styles.label}>Task</Text>
            <View style={[styles.textInputView,{borderColor:InputError?'red':'#d9d9d9'}]}>     
                  <TextInput
                    style={styles.textInput}
                    placeholder="Add Task"
                    onChangeText={text => setTask(text)}
                    value={task}
                    onFocus={() => scroll.current?.scrollToEnd(true)}
                    placeholderTextColor="#d9d7d7"
                  />
            </View>
            {task=='' && InputError &&  
              <Text style={styles.errorText}>Enter Task Title! </Text>
            }  
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button} onPress={()=>{add_task()}}>
              <Text style={styles.buttonText}>Add a Task</Text>
            </TouchableOpacity>
            
          </View>
        
      </View>
   
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapContainer:{
    flex:.95,
    justifyContent:'center',
    alignItems:'center'

  },
  textInputView:{
    flexDirection:'row',
    borderRadius:10,
    borderColor:'#d9d9d9',
    borderWidth: .5,
    padding:10,
    backgroundColor:'#f2f2f2',
    marginTop: '2%',
  },
  textInput: {
    fontSize:15,
    paddingLeft:10,
    width:'85%'

  },
  label:{
    marginHorizontal:20,
    marginTop:'8%',
    fontSize:16,
    fontWeight:'bold'
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
  },
  errorText:{
    color:'red',
    marginHorizontal:20,
    marginTop:'2%',
    fontSize:14,
  }
});
