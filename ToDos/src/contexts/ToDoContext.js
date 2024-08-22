import {createContext,useContext} from "react";

export const ToDoContext  = createContext({
    todos:[
        {
            id:1,
            ToDo :"Message",
            completed:false,
        }
    ],
    addToDo:(ToDo)=>{},
    updateToDo:(id,ToDo)=>{},
    deleteToDo:(id)=>{},
    toggleToDo:(id)=>{},
});


export const useToDo = () =>{
    return useContext(ToDoContext);
}

export const ToDoProvider = ToDoContext.Provider