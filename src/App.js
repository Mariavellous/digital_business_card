import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Digital Business Card
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <ul>
          <li> Photo </li>
          <li> Name </li>
          <li> Professional Profile Links </li>
          <li> About Me </li>
          <li> Footer Links </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
