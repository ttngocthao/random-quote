import React from "react";
import Quote from "./Quote";

class QuoteBox extends React.Component {
  constructor() {
    super();
    this.state = {
      index: undefined,
      color: undefined,
      quote: [],
      author: []
    };
    this.clickHandle = this.clickHandle.bind(this);
  }
  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        for (var i = 0; i < data.quotes.length; i++) {
          this.setState({
            quote: [...this.state.quote, data.quotes[i].quote],
            author: [...this.state.author, data.quotes[i].author]
          });
        }
        // console.log(this.state);
        // console.log(this.state.quote[9]);
      });
  }

  clickHandle() {
    this.setState({
      index: Math.floor(Math.random() * 102)
    });
  }
  render() {
    const randomNoOnLoad = Math.floor(Math.random() * 102);
    function randomColor() {
      function randomNo() {
        return Math.floor(Math.random() * 255);
      }
      return `rgb(${randomNo()},${randomNo()},${randomNo()})`;
    }
    let quoteBoxStyle = {
      backgroundColor: randomColor(),
      height: "100vh"
    };

    return (
      <div id="quote-box" style={quoteBoxStyle}>
        <h1>Random Quote Machine</h1>
        <Quote
          quote={this.state.quote[randomNoOnLoad]}
          author={this.state.author[randomNoOnLoad]}
        />
        <button id="new-quote" onClick={this.clickHandle}>
          Next Quote
        </button>
      </div>
    );
  }
}
export default QuoteBox;
