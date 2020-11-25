import React from 'react';
import { BrowserRouter, Redirect, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Body from './SortingVisualizer/body/Body';

function App() {
  return (  
   <div>
     <Body />
   </div>
  );
}
export default App;


// <Switch>
// <Route path="/:sort" component={renderPage} />
// <Route path="/" component={renderPage}/>
// </Switch>