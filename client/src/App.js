import React from 'react';
import logo from './logo.svg';
import './App.css';

function Client() {

  const accessToken = 'ES4DbzavP6Jr7bNyRMtczxpyKKKGEs';
  console.log("hello there");
  const config = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer' + accessToken
    },
  }

  fetch('http://127.0.0.1:8000/users/', config).then((res) => {
      console.log("found response");
      console.log(res);
      console.log(res.text());
      // res.json().then((user) => {
      //   console.log(user);
      // });
    });

  return ( <
    div className = "App" > {
      /* <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header> */
    } <
    h1 > Hello World! < /h1>

    <
    /div>
  );
}

export default Client;