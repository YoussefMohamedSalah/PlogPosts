import './App.css';
import { useState } from 'react';
import Main from './Pages/Main';
import Login from './Pages/Login';
import { LoginContext } from './Contexts/LoginContext';

function App() {
  
  const [user, setUser] = useState(false);
  
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <div id={theme}>
      <LoginContext.Provider value={{ user, setUser, theme, toggleTheme }}>
        {!user ? <Login /> : <Main />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
