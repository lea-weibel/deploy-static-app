import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!open && <button onClick={() => setOpen(true)}>CLICK ME</button>}
        {open && (
        <>
        <h1>WELL DONE !</h1>
        <h2>You did it !</h2>
        <p>You can go take a nap now</p>
        </>
        )}
      </header>
    </div>
  );
}

export default App;
