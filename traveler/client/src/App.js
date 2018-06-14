// import React from "react";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// const App = () => (
//   <div>
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           <Route exact path="/" component={Books} />
//           <Route exact path="/books" component={Books} />
//           <Router exact path="/books/:id" component={Detail} />
//           <Route component={NoMatch} />
//         </Switch>
//       </div>
//     </Router>
//   </div>
// );

// export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navtabs from "./components/Navtabs";
import Cities from "./components/Cities";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    cities: ["Raleigh", "Paris", "Amsterdam"]
  };

  render() {
    return (
      <Router>
        <div>
          <Navtabs cities={this.state.cities} />
          <br />
          <Cities />
        </div>
      </Router>
    );
  }
}

export default App;
