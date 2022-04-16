import  React,{FC}  from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Todo from '../screens/index'
import Create_Todo from '../screens/create'
const Stack= createNativeStackNavigator();

const Appstack : FC =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="To-Do App" component={Todo}></Stack.Screen>
            <Stack.Screen name="Add Task" component={Create_Todo}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default Appstack