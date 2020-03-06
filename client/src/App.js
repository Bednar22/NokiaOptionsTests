import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';
import Message from "./components/message.component"
import Navbar from "./components/navbar.component";
import CreateUser from "./components/create-user.component";
import Counter from "./components/counter.component";
import EventBind from "./components/clickFunction.component"
function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/user" component={CreateUser} />
       <Message  name="Testtttting"/>   
      
      <Counter/>
      <br/>
        <EventBind/>
      </div>
    </Router>
  );
}

export default App;