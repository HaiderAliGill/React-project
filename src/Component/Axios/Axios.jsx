import React, { useEffect, useState } from "react";
import { getapi, postapi, deleteapi, putapi } from "./Axios.js";

function Axios() {
  let [api_data, setapi_data] = useState([]);
  let [new_data, setnew_data] = useState({
    title: "",
    body: "",
  });

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
  },[api_data]);

  // END GET REQUEST

  return (
    <div className="nav-container">
      <div className="">
        <h1>Axios File</h1>
      </div>
    </div>
  );
}

export default Axios;
