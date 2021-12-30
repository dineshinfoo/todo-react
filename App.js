import TodoList from "./TodoList";
import React, { useState } from "react";

const App = () => {
  /// input  data and clear ////
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass,setPass]= useState("");

  /// store on they data in array form ///
  const [todos, setTodos] = useState([]);

  const [Index, setIndex] = useState(0);

  const [Edit, setEdit] = useState(false);

  const changeHandler = (e) => {
    setName(e.target.value);
  };

  const change = (e) => {
    setEmail(e.target.value);
  };
  const changer = (e) =>{
    setPass(e.target.value);
  }
console.log(todos,"todos")
  const submitHandler = (e) => {
    e.preventDefault(); //page render agama iruka use pandranga
    if (Edit) {
      todos[Index].Name = name;
      todos[Index].Email = email;
      todos[Index].Pass = pass;
      setTodos((prevState) => [...prevState]);  // render pannah use aguam already set ana field kuam epo upadate pandra field ku am
      setEdit(false);
    } else {
      setTodos((prevState) => [
        ...prevState,
        {
          Name: name,
          Email: email,
          Pass: pass,
        },
      ]);
      // const newTodos = [
      //   ...todos,
      //   {
      //     Name: name,
      //     Email: email,
      //   },
      // ];

      // setTodos(newTodos);
    }
   
    setName("");
    setEmail("");
    setPass("");
  };
  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  };

  const editHandler = (Editdata,EditIndex) => {
    setIndex(EditIndex);
    setName(Editdata.Name);
    setEmail(Editdata.Email);
    setPass(Editdata.Pass);
    // setTask(data[0])
   
    setEdit(true);
  };
  console.log(Index, "indexValue");

  //   const setTodos  =() =>{

  //     setEdit(false)
  // }

  // console.log(todos,"todos")

  // todos[3].name=task;

  // const [edit,setEdit] = useState(false)

  // const updateUser =() =>{

  //     setEdit(false)

  // }

  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Todo</h5>
            <form onSubmit={submitHandler}>
              <input
                type="text"
                name="name"
                value={name}
                onChange={changeHandler}
              />
              <input type="text" name="email" value={email} onChange={change} />
              <input type="text" name="pass" value={pass} onChange={changer}/>
              <input
                type="submit"
                value={`${Edit ? "Edit" : "Add"}`}
                name="Add"
              />
              

              {/* <input type="text"/> */}
              {/* {edit ? (<button onClick={()=>)}>Save</button>) : (<button onClick={()=>{setEdit(true)}}>Edit</button>)} */}
            </form>
            <TodoList
              todolist={todos}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
            />
          </div>
        </div>
      </center>
    </div>
  );
};

export default App;
