import {ADD_TASK} from './action'
const INITIAL_STATE = {
  task:[]
};
const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ADD_TASK:
      return {
        ...state,
        task:state.task.map(
          (content, i) => i === 1 ? {...content, text: action.payload}
                                  : content
        )
      }
    default:
      return {...state}
  }
};

export default reducer;