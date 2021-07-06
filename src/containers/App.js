import React, { useState, useEffect } from 'react';
import Scroll from "../components/Scroll";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from './ErrorBoundary';

// import { robots } from './robots'; // needs to be destructured because not default export
import "./App.css";
//In order to use state, we have to use classes

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [themes, setThemes] = useState(["Forest", "Beach", "Ocean", "Desert", "Arctic", "Meadow", "Caves", "Mountain", "Space", "Jungle", "River", "Sky", "Tundra", "Swamp", "Underwater"]);



  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users") // fetch is a method on the Window object.
  //     // It comes with all browsers now: it helps us make requests to servers 
  //     // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
  //     .then(response => response.json())
  //     .then(users => {
  //       console.log("users",users);
  //       setRobots(users)
  //     });
  // }, []); // Add an empty array to simulate only ComponentDidMount (and not ComponentDidUpdate)
  const onRefreshSel = () => {
    setRobots([]);
    console.log("refreshing selection");
    Promise.all(themes.map(theme =>
      fetch(`https://source.unsplash.com/200x200/?${theme.toLowerCase()}`).then(resp => ({ name: theme, url: resp.url }))
    ))
      .then(array => setRobots(array))
      .catch(err => console.log);
  }

  useEffect(() => {
    onRefreshSel();
  }, []);


  const onSearchChange = (event) => { // When you create your own methods on a component, you have to use arrow function syntax
    setSearchField(event.target.value);
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  });

  return (

    <div className="tc">
      <h1 className="f1">Landscape Picker</h1>
      <SearchBox searchChange={onSearchChange} refreshSel={onRefreshSel} />
      {
        !robots.length
          ? (<h1 className="tc">Loading...</h1>) :
          (
            < ErrorBoundary >
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          )
      }
    </div >
  )
}

export default App;
//default is used when you're only returning one component.




