import React from "react";

import "./RandomQuote.css";

const quotes = [
  {
    text: "Don't use cat gratuitously."
  },
  {
    text: "If you're not struggling, you're doing something wrong."
  },
  {
    text: "RIP Power Bridge."
  },
  {
    text: "Racing is life and life is risk.",
    author: "Michael Schumacher, 7-time F1 world champion"
  },
  {
    text: "I dunno, I'm probably gonna go hangboard.",
    author: "Alex Honnold, first to free solo El Capitan"
  },
  {
    text: (
      <>
        I know it hurts being so far behind this weekend, but let's remember
        that <i>we do something that we love</i>.
      </>
    ),
    author: "Sebastian Vettel, 2019 Spanish GP post-race team radio"
  }
];

const RandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  const { text, author } = quotes[randomIndex];

  return (
    <div className="random-quote-wrapper">
      <div>
        <p>{text}</p>
      </div>
      <div>
        <p>{author && `-- ${author}`}</p>
      </div>
    </div>
  );
};

export default RandomQuote;
