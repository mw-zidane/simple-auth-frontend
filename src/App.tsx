import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import { useState, useEffect } from 'react';

function App() {
    const [name, setName] = useState('');

    useEffect(() => {
        (
            async () => {
                const response = await fetch('https://localhost:7237/api/Auth/user', {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });

                const content = await response.json();
                setName(content.name);
            }
        )();
    }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav name={name} setName={setName} />

        <main className="form-signin">
          <Routes>
            <Route path='/' Component={() => <Home name={name} />} />
            <Route path='/login' Component={() => <Login setName={setName} />} />
            <Route path='/register' Component={Register} />
          </Routes>
        </main>
      </BrowserRouter>
    </div >
  );
}

export default App;
