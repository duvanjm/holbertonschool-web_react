import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <body className={css(style.AppBody)}>
      <p className={css(style.login)}>Login to access the full dashboard</p>
      <div className={css(style.login)}>
        <label htmlFor="username">
          Email:
          <input></input>
        </label>
        <label htmlFor="password">
          Password:
          <input></input>
        </label>
        <button className={css(style.AppBodyButton)}>Ok</button>
      </div>
    </body>
  );
}

const style = StyleSheet.create({
  AppBody: {
    paddingBottom: '275px',
    textAlign: 'left',
    borderBottom: '3px solid',
    borderColor: '#d73953'
  },
  
  AppBodyButton: {
    textAlign: 'center',
    height: '22px',
    width: '30px'
  },
  
  login: {
    marginTop: '30px',
    marginLeft: '30px'
  }
  
});

export default Login;
