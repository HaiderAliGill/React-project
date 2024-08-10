import React, { useState } from "react";

function Postfetch() {
  const [postdata, setpostdate] = useState({
    title: " ",
    body: " ",
  });

  const handelfun = (e) => {
    console.log(e);
    const { name, value } = e.target;

    setpostdate({
      ...postdata,
      [name]: value,
    });
  };

  const handelsubmit = (e) => {
    e.preventDefault();

    const pastUrl = "https://jsonplaceholder.typicode.com/posts";

    // make request that is name like send data this suld be a object table

    const requesttype = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postdata),
    };

    fetch(pastUrl, requesttype)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="nav-container">
      <div className="">
        <h1 className="">Post Fetch Function</h1>
        <form onSubmit={handelsubmit}>
          <div className="">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              name="title"
              defaultValue={postdata.title}
              // value={postdata.title}
              onChange={handelfun}
            />
          </div>
          <div className="">
            <label htmlFor="body">Text</label>
            <textarea
              name="body"
              id=""
              defaultValue={postdata.body}
              onChange={handelfun}
            ></textarea>
          </div>  
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Postfetch;
