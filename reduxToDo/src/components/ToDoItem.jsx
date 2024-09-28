import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, toggleToDo, updateToDo } from "../features/todo/todoSlice";

function ToDoItem({ todo }) {
  const dispatch = useDispatch();

  const [ToDoMsg, setToDoMsg] = useState(todo.text);
  const [ToDoEditable, setTodoEditable] = useState(todo.completed);

  const updateToDoMsg =()=>{
    dispatch(updateToDo({id:todo.id,text:ToDoMsg}));
    setTodoEditable(false);
  };

  const toggleToDoMsg = () => {
    dispatch(toggleToDo({id:todo.id}))
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleToDoMsg}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          ToDoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={ToDoMsg}
        onChange={(e) => setToDoMsg(e.target.value)}
        readOnly={!ToDoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (ToDoEditable) {
            updateToDoMsg();
          } else setTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {ToDoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => dispatch(deleteToDo(todo.id))}
      >
        ❌
      </button>
    </div>
  );
}

export default ToDoItem;
