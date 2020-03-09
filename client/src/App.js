import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import "./csses/App.css"
import Navbar from "./components/navbar.component";
import CreateUser from "./components/create-user.component";
import Counter from "./components/counter.component";
import EventBind from "./components/clickFunction.component";
import ParentComponent from "./components/parent.component";
import UserGreeting from './components/ifstatements.component';
import NameList from './components/name-list.component'
import Message from "./components/message.component"
import CreateTemplate from './components/create-template.component';
import StyleSheets from './components/styleshee.component'
import Form from './components/forms.component'

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/user" component={CreateUser} />
      <Route path="/template" component= {CreateTemplate} />
       {/* <Message  name="Testtttting"/>    */}
      



      {/* <Counter/>
      <br/>
        <EventBind/>
      <br/>
      <ParentComponent/>
      <br/>
      <UserGreeting/>
      <br/>
      <NameList/> 
      <br/> */}

      <StyleSheets primary={false} />
      <Form />
      </div>
    </Router>


  );
}

export default App;