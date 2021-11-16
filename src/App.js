import "./App.css";
import useRandomJoke from "./useRandomJoke";

function App() {
  const joke = useRandomJoke();

  return (
    <div className="App">
      <center>
        <h1>The Joke Generator</h1>

        <h2>{joke}</h2>

        <button>Generate joke</button>
      </center>
    </div>
  );
}

export default App;
