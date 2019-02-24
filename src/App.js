import React, { Component } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import Header from "./components/header/header";

import Courses from "./components/section/courses";

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Toolbar logo="#" title="oyo" />
        <div className="conrainer m-5">
          <Header
            header="Distributed System Courses"
            paragraph=" Codeathlon's Distributed System Courses is a set of in classroom training courses for learning distributed systems."
          />
          <Courses />
        </div>
      </div>
    );
  }
}

export default App;
