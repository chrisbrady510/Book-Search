import React from "react";
import "./style.css"


function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1><span><a className="white" id="jumboHead" href="/">The Best Virtual Bookshelf Ever!!</a></span></h1>
        <div>
          <a className="white" target="_blank" rel="noopener noreferrer" href="http://developers.google.com/books/">
            The power of Google Books, is at your fingertips! 
          </a>
        </div>
      
    </div>
  );
}



export default Jumbotron;
