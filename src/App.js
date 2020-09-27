import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NewTournament from './components/newTournament';
import RegisteredTournament from './components/registeredTournaments';

function App() {
  return (
    <div className="App">
      <header >
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/newTournament">FIFA Manager</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/newTournament">New Tournament</Nav.Link>
            <Nav.Link href="/registeredTournaments">Registered Tournaments</Nav.Link>
          </Nav>
        </Navbar>
        <br/>
        <Switch>
            <Route exact path="/">
              <NewTournament />
            </Route>
            <Route path="/newTournament">
                <NewTournament />
            </Route>
            <Route path="/registeredTournaments">
                <RegisteredTournament />
            </Route>
        </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;
