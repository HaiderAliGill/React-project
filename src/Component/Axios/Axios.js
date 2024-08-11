import axios from "axios";

let URL = "https://jsonplaceholder.typicode.com";

let createInstance = axios.create({
  baseURL: URL,
});

// GET REQUEST

export const getapi = () => {
  return createInstance.get("/posts");
};

// POST REQUEST DATA

export const postapi = (postdata) => {
  return createInstance.post("/posts", postdata);
};

// PUT REQUEST

export const putapi = (post_id, update_data) => {
  return createInstance.put(`/posts/${post_id}`, update_data);
};

// DELETE REQUEST API

export const deleteapi = (post_id) => {
  return createInstance.delete(`/posts/${post_id}`);
};
