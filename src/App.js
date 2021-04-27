import logo from './logo.svg';
import './App.css';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Wikipedia Viewer</h2>
        <Search />
      </header>
    </div>
  );
}

export default App;
