import React from 'react'
import {MdDoneOutline} from 'react-icons/md'
import {BsFillTrashFill} from 'react-icons/bs'
import {FiEdit} from 'react-icons/fi'


const TodoList = ({todos, setTodos, setEditTodo}) => {

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id ))
    }

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {...item, completed: !item.completed};
                }
                return item;
            })
        )
    }

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo)
    }

  return (
    <div>
        {todos.map((todo) => (
            <div className={todo.completed ? "active" : "list"} key={todo.id}>
                <div className='title'>
                    <h1>{todo.title}</h1>
                </div>
                <div className='icons'>
                    {/* <button onClick={() => {handleComplete(todo)}}>complete</button>
                    <button onClick={() => {handleEdit(todo)}}>edit</button>
                    <button onClick={() => {handleDelete(todo)}}>delete</button> */}
                    <MdDoneOutline className='margin' size={25} onClick={() => {handleComplete(todo)}} />
                    <BsFillTrashFill className='margin' size={25} onClick={() => {handleDelete(todo)}} />
                    <FiEdit className='margin' size={25} onClick={() => {handleEdit(todo)}} />
                </div>
            </div>
        ))}
    </div>
  )
}

export default TodoList