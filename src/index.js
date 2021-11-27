import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let curDate = new Date();
curDate = curDate.getHours();
let gretting = "";
const cssStyle = {};

if (curDate >= 1 && curDate < 12) {
  gretting = "Good Morning";
  cssStyle.color = "green";
} else if (curDate >= 12 && curDate < 19) {
  gretting = "Good Afternoon";
  cssStyle.color = "orange";
} else {
  gretting = "Good Night";
  cssStyle.color = "black";
}


ReactDOM.render(
  <>
    <div>
      <h1> Hey Aditya, <span style={cssStyle}> {gretting} </span>  </h1>
    </div>
  </>,
  document.getElementById('root')
);


