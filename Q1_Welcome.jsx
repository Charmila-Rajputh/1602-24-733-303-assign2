

import React, { Component } from "react";

// (i) Functional (stateless) component
function WelcomeFunctional(props) {
  return <h2>Welcome, {props.name}! (Functional Component)</h2>;
}

// (ii) Class component
class WelcomeClass extends Component {
  render() {
    return <h2>Welcome, {this.props.name}! (Class Component)</h2>;
  }
}

// App renders both components
function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <WelcomeFunctional name="Charmila" />
      <WelcomeClass name="Charmila" />
    </div>
  );
}

export default App;
