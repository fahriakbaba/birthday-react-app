import React from "react";
import './App.css';
import Button from "./components/Button";
import data from "./data";
import List from "./components/List";

function App() {
  const [people, setPeople] = React.useState(data);

  function deleteAll() {
    setPeople([]);
  }
  const refresh = () => {
    setPeople(data);
  }
  return (
    <div className="App">
      <h3>{people.length>0 ? `${people.length} Birthdays Today` : "No Birthdays to Show"}</h3>
      {
        people.map(person => (<List person={person} />))
      }
      <Button deleteAll={deleteAll}/>
      <button className="refresh-button" onClick={refresh}>Refresh</button>
    </div>
  );
}

export default App;
