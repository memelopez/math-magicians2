import React from 'react';
import QuoteComp from './QuoteComp';

function Quote() {
  return (
    <div className="quote-div">
      <span className="actual-quote">
        <QuoteComp />
      </span>
    </div>
  );
}

export default Quote;
