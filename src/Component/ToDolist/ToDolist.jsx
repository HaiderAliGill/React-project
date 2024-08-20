import React, { useState } from "react";
import imagedelete from "../../assets/DELETE.png"
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/features/TodoSlice"

function ToDolist() {

  const dispatch = useDispatch("")

  const [newtodo, setnewtodo] = useState("")

  console.log(newtodo)


  const handeltodo = () => {
    if (newtodo) {
      dispatch(addTodo({
        id: Date.now(),
        text: newtodo,
      }))
      setnewtodo("")
    }
  }

  


  return (
    <div className="nav-container">
      <div>
        <h1>TO DO LIST</h1>
        <div>
          <Container>
            <h1>TO DO LIST</h1>
            <Wrapper>
              <input type="text" placeholder="Add a new Todo" onChange={(e) => setnewtodo(e.target.value)} />
              <button>Click Add List</button>
            </Wrapper>
            <TodoItem>
              <div className="">TODO -1</div>
              <div className="">
                <img src={imagedelete} alt="sdsds" width="40px" />
              </div>
            </TodoItem>
            <Clearbutton>
              <button onClick={handeltodo}>Clear All</button>
            </Clearbutton>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default ToDolist;

const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items : center;
  margin:20px; 
`
const Wrapper = styled.div`

display:flex;
align-item:center;
margin: 5px 0px 20xp
background:transparent;
box-shadow:0 4px 20px -2px black;

input{
width:330px;
height:40px;
padding:10px;
border-radius:30px
}
`
const TodoItem = styled.div`

  display:flex;
  width:100%;
  align-items:center;
  justify-content: space-between;
  margin: 12px;
  background: black;
  padding: 12px;

  img{
  
  cursor:pointer;

  }

`
const Clearbutton = styled.div`

  display:flex;
  width:100%;
  align-items:center;
  justify-content: center;
  
  button{
    padding:10px;

  }

`
