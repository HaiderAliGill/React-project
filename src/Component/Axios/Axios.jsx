import React, { useEffect, useState } from "react";
import { getapi, postapi, deleteapi, putapi } from "./Axios.js";

function Axios() {
  let [api_data, setapi_data] = useState([]);
  let [new_data, setnew_data] = useState({
    title: "",
    body: "",
  });


  //  UPDATE FUN

  const upDATE_fun = (post_id, update_data) => {
    putapi(post_id, update_data).then((response) => {
      let updatepost = api_data.map((post) => {
        post.id === post_id ? response.data : post;
        console.log(updatepost)
      })
    }).catch((erroe) => {
      console.log(erroe)
    })
  }

  // END UPDATE FUN

  // GET REQUEST

  useEffect(() => {
    getapi()
      .then((response) => {
        setapi_data(response.data);
        console.log("axios data", api_data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // END GET REQUEST

  // Delete FUN REQUEST

  let delete_fun = ((delete_id) => {
    deleteapi(delete_id).then((response) => {
      let deletepost = api_data.filter((post) => post.id !== delete_id ? response.data : post)
      console.log(deletepost)
    }).catch((error) => {
      console.log(" Delete FUN error", error)
    })
  })


  // END Delete FUN REQUEST

  const handelpost = ()=>{
  
    postapi(new_data).then((response)=>{
      setapi_data([...api_data,response.data])
      setnew_data({title: "", body:""})
    }).catch((erroe)=>{
      console.log(erroe)
    })

  }



  return (
    <div className="nav-container">
      <div className="">
        <h1>Axios File</h1>

        <h1 className="">GET API</h1>
        <ul>
          {api_data.map((post) => (
            <li key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              <button onClick={() => upDATE_fun(post.id, {
                title: "Updated Title",
                body: "Updated Body"
              })}>UPDATE</button>
              <button onClick={() => delete_fun(post.id)}>DELETE</button>
            </li>
          ))}
        </ul>

        <hr />
        <br />
        <br />
        <h1>POST API</h1>
        <h1>Create New <POst></POst></h1>
        <input type="text" defaultValue={new_data.title} onChange={(e) => setnew_data({
          ...new_data,
          title: e.target.value,
        })} />
        <input type="text" defaultValue={new_data.body} onChange={(e) => setnew_data({
          ...new_data,
          Body: e.target.value,
        })} />
        <button className="" onClick={handelpost}>Click Here</button>

      </div>
    </div>
  );
}

export default Axios;
