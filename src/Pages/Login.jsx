import React from 'react';
import SwitchThemeIcon from '../Components/SwitchThemeIcon';
import { useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';
import Button from 'react-bootstrap/Button';
// import styled from 'styled-components';

function Login() {
  const { setUser } = useContext(LoginContext);
  return (
    <div className="Login--Page--Wrraper">
      <div className="main">
        <p className="sign" align="center">
          Sign in
        </p>
        <form className="form1">
          <input className="username" type="text" placeholder="Username" />
          <input className="password" type="password" placeholder="Password" />
          <p className="forgot" align="center"></p>
          <Button
            style={{ borderRadius: '24px', width: '8rem' }}
            className="submit"
            align="center"
            onClick={() => setUser(true)}>
            Sign in
          </Button>
        </form>
      </div>
        <SwitchThemeIcon />
    </div>
  );
}

export default Login;
