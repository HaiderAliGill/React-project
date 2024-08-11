import React, { useEffect, useState } from "react";

function UpdateFetch() {
  const [update, setupdate] = useState({
    id: 1,
    title: "",
    body: "",
  });

  const [loadingdata, setloadingdata] = useState(false);
  const [message, setmessage] = useState();

  const updatefun = (e) => {
    const { name, value } = e.target;

    setupdate({
      ...update,
      [name]: value,
    });
  };

  const thankupdate = (e) => {
    e.preventDefault();
    setloadingdata(true);
    console.log(e);

    const ApiURL = `https://jsonplaceholder.typicode.com/posts/${update.id}`;

    const requestOPtion = {
      method: "PUT",
      headers: {
        "Content-Type": "appliation/json",
      },
      body: JSON.stringify(update),
    };

    fetch(ApiURL, requestOPtion)
      .then((response) => {
        if (response.status === 403) {
          throw new Error("Permission error: Access denied.");
        }

        return response.json();
      })
      .then((data) => {
        setmessage("post success fuly");
        console.log(data);
      })
      .catch((error) => {
        setmessage("post success 2222");
        consle.log(error);
      })
      .finally(() => {
        setloadingdata(false);
      });
  };

  useEffect(() => {
    const ApiID = update.id;
    const APIUPADTE = `https://jsonplaceholder.typicode.com/posts/${ApiID}`;

    fetch(APIUPADTE)
      .then((response) => response.json())
      .then((data) => {
        setupdate(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [update.id]);

  return (
    <>
      {loadingdata && <h1>Loading...</h1>}
      {message && <h1>{message}</h1>}
      <div className="nav-container">
        <div className="">
          <h1>UP-Date-Fetch</h1>
          <form onSubmit={thankupdate}>
            <div className="">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id=""
                defaultValue={update.title}
                onChange={updatefun}
              />
            </div>
            <div className="">
              <label htmlFor="body">body</label>
              <textarea
                name="body"
                id=""
                defaultValue={update.body}
                onChange={updatefun}
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateFetch;
