import React from 'react';
import ReactSwitch from 'react-switch';
import { useContext } from 'react';
import {LoginContext} from '../Contexts/LoginContext' 

function SwitchThemeIcon() {

  const {theme, toggleTheme} = useContext(LoginContext)

  return (
    <div>
      <div className="switch">
        <label> {theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
        <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
      </div>
    </div>
  );
}

export default SwitchThemeIcon;
