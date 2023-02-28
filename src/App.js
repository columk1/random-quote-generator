import React from 'react';
import './App.css';
const { useState, useEffect } = React;
const quotes = [
    {quote: "It goes, boys!", author: "Lynn Hill"},
    {quote: "The crux is a dyno to a shark tooth micro crimper quarter pad mini pinch.", author: "Daniel Woods"},
    {quote: "If it's not hard then it's not hard is it?", author: "Hard Grit"},
    {quote: "It's fucking hundred million degrees!", author: "Adam Ondra"}
];

//Main App Component
function App() {
  
  return (
    <div className="App">
      <div id="wrapper">
        <Quote quotes = {quotes} />
    </div>
    <div class="footer">
      <a href="https://codepen.io/columk/">by columk</a>
    </div>
  </div>
  );
}

//Quote component that takes in an array of quotes as props. Uses hooks for quotes, colors and currentQuote.
function Quote(props) {
  const [quotes, setQuotes] = useState({quote: '', author: ''});
  const [colors, setColors] = useState({primary: 'white', secondary: 'grey'});
  const [currentQuote, setCurrentQuote] = useState('');
  
  //Function t
  function newQuote() {
    
    let random = Math.floor((Math.random() * props.quotes.length));
    
    let nextQuote = props.quotes[random].quote;
    if (nextQuote === currentQuote) {
      newQuote();
    } else {
      setQuotes({
        quote: nextQuote,
        author: props.quotes[random].author
      })
      setCurrentQuote(nextQuote);
    }
    
   function getColor() {
    var colors = [
  ['#ff5252', '#c50e29'],
  ['#ff4081', '#c60055'],
  ['#e040fb', '#aa00c7'],
  ['#7c4dff', '#3f1dcb'],
  ['#40c4ff', '#0094cc'],
  ['#64ffda', '#14cba8'],
  ['#18ffff', '#00cbcc']
];
  return colors[Math.floor(Math.random() * colors.length)];
}
    //Assign a random color pallette to newColors
    const newColors = getColor();
    
    //Add conditional here to stop colors repeating
    //if(newColors[0] == colors.primary) {
      
    setColors({
      primary: newColors[0],
      secondary: newColors[1]
    })
    
    document.body.style.backgroundColor = newColors[1];
    
  }
  
  useEffect(() => {
  newQuote();
  // eslint-disable-next-line
}, []);
  
    return (
      <div id="quote-box" style={{backgroundColor: colors.primary}}>
          <div class="quote-text">
            <i class="fa-solid fa-quote-left"></i>
            <span id="text">{quotes.quote}</span>
      </div>
          <div class="quote-author">
          - <span id="author">{quotes.author}</span>
          </div>
          <div class="buttons">
            <a href={'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quotes.quote + '" ' + quotes.author)}
              class="button" style={{backgroundColor: colors.secondary}}
              id="tweet-quote"
              title="Tweet this quote!"
              target="_top"
            >
            <i class="fa fa-twitter"></i>
            </a>
            <a href="http://tumblr.com/widgets/share/tool?canonicalUrl=https://codepen.io"
              class="button" style={{backgroundColor: colors.secondary}}
              id="tumblr-quote"
              title="Post this quote on tumblr!"
              target="_blank"
              rel="noreferrer"
            >
            <i class="fa fa-tumblr"></i>
            </a>
            <button onClick={newQuote} class="button" style={{backgroundColor: colors.secondary}} id="new-quote">New quote</button>
          </div>
        </div>
      )
}

export default App;
