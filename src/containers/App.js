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


  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users") // fetch is a method on the Window object.
        // It comes with all browsers now: it helps us make requests to servers 
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
        .then(response => response.json())
        .then(users => {
          console.log(users);
          setRobots(users)});
  }, []); // Add an empty array to simulate only ComponentDidMount (and not ComponentDidUpdate)

  const onSearchChange = (event) => { // When you create your own methods on a component, you have to use arrow function syntax
   setSearchField(event.target.value);
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  });

    return !robots.length ?  // or :if (robots.length === 0) ... else.. -> 
      <h1>Loading...</h1> :
      (
        <div className="tc">
          <h1 className="f1">Robofriends</h1>
          <SearchBox searchChange={onSearchChange} /> {/* have to use "this." because we're inside an object (App)*/}
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} /> {/* get it from the state instead - which contains the filtered robots list*/}
            </ErrorBoundary>
          </Scroll>
        </div>
      ); //parentheses necessary if you're writing more than one jsx element
  }

export default App;
//default is used when you're only returning one component.




