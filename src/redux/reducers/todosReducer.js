import { ADD, DELETE, DONE, EDIT } from "../types";

const initialState={
    todos:[
        {
            id:1, text:"Learn Html",isDone:false
        },
        {
            id:2, text:"Learn Css",isDone:false
        }
    ],
}

function todosReducer(state=initialState,action){
    switch(action.type){
        case DONE:
            return{
                ...state,todos:state.todos.map(todo=>todo.id===action.payload ?({...todo,isDone:! todo.isDone}): todo)
            };
        case DELETE:
            return{
                ...state,
                todos:state.todos.filter(todo=>todo.id!== action.payload),
            } ; 
            case EDIT:
                return{
                    ...state,todos:state.todos.map(todo=>todo.id===action.payload.id ?({...todo,text:action.payload.text}): todo)
                };  
             case ADD: 
             return{
                ...state,todos:[...state.todos,{id:Math.random(),text:action.payload,isDone:false}],
             } ;    
         default:
            return state;   
    }
}
export default todosReducer;