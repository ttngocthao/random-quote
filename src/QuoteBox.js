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
    this.randomNum = this.randomNum.bind(this);
    this.randomColor = this.randomColor.bind(this);
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
  randomNum(i) {
    return Math.floor(Math.random() * i);
  }
  clickHandle() {
    this.setState({
      index: this.randomNum(102)
    });
  }
  randomColor() {
    const hue = this.randomNum(360);
    const sat = this.randomNum(100);
    const light = this.randomNum(100);
    return `hsl(${hue},${sat}%,${light}%)`;
  }
  render() {
    const randomNoOnLoad = this.randomNum(102);

    let bkgColor = this.randomColor();

    let quoteBoxStyle = {
      backgroundColor: bkgColor
    };

    return (
      <div id="quote-box" style={quoteBoxStyle}>
        <h1>Random Quote Machine</h1>
        <button id="new-quote-btn" onClick={this.clickHandle}>
          Next Quote
        </button>
        <Quote
          quote={this.state.quote[randomNoOnLoad]}
          author={this.state.author[randomNoOnLoad]}
        />
      </div>
    );
  }
}
export default QuoteBox;
