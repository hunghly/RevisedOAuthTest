import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Client() {
  const accessToken = "ES4DbzavP6Jr7bNyRMtczxpyKKKGEs";
  const config = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };

  console.log(config.headers);

  fetch("http://127.0.0.1:8000/users/", config).then((res) => {
    console.log("found response");
    console.log(res);
    console.log(res.json());
  });

  return (
    <div className="App">
      <h1> Hello World! </h1>
    </div>
  );
}

export default Client;
