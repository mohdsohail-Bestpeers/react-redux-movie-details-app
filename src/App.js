import logo from './logo.svg';
import './App.css';
import MovieDetails from './components/MovieDetails'
import MovieList from './components/MovieList'

function App() {
  return (
    <div className="App">
      <h1>Redux Movie</h1>
      <div className="container">
        <MovieList />
        <MovieDetails/>
      </div>
    </div>
  );
}

export default App;
