import { useRef, useState } from "react";
import "./App.css";
import useRandomJoke from "./useRandomJoke";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("Ehfaz");
  const [lastName, setLastName] = useState("Rezwan");

  const joke = useRandomJoke(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div className="App">
      <center>
        <h1>The Joke Generator</h1>

        <h2>{joke}</h2>

        <form>
          <input placeholder="First name" ref={firstNameRef} />
          <input placeholder="Last name" ref={lastNameRef} />

          <button onClick={generateJoke} type="submit">
            Generate joke
          </button>
        </form>
      </center>
    </div>
  );
}

export default App;
