import holberton_logo from './holberton_logo.jpg';
import { getFullYear, getFooterCopy } from './utils.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holberton_logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
        <div className="login">
          <label htmlFor="username">
            Email:
            <input></input>
          </label>
          <label htmlFor="password">
            Password:
            <input></input>
          </label>
          <button>Ok</button>
        </div>
      </body>
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </footer>
    </div>
  );
}

export default App;
