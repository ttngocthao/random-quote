import React from "react";
import ReactDOM from "react-dom";
import QuoteBox from "./QuoteBox";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <QuoteBox />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
