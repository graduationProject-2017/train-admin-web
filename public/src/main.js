import React from "react";
import {render} from "react-dom";
import {Router, Route, hashHistory} from 'react-router';
import Item from './components/Item';

render(
  <Router history={hashHistory}>
    <Route path="/item" component={Item}/>
  </Router>,
  document.getElementById("app")
);