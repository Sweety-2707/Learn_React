import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos:[]
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addToDo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
                completed:false,
            };
            state.todos.push(todo);
        },
        deleteToDo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateToDo:(state,action)=>{
            state.todos = state.todos.map((todo)=>todo.id===action.payload.id ? {...todo,text:action.payload.text} : todo)
        },
        toggleToDo:(state,action)=>{
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.completed = !todo.completed; // Toggle the completed status
            }
        }
    }
})

export const {addToDo,deleteToDo,updateToDo,toggleToDo} = todoSlice.actions;

export default todoSlice.reducer;