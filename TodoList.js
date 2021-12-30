import React from 'react'

const TodoList = ({todolist,deleteHandler,editHandler}) => {
    return (
        <div>
            {todolist.map((data,index) =>{ return(
            <div key={index}>
                <h5>{data.Name} {data.Email}{data.Pass}<button onClick={() => deleteHandler(index)}>Delete</button> <button onClick={() => editHandler(data,index)}>Edit</button></h5> 
            </div>
            )})}
        </div>
    )
}

export default TodoList
