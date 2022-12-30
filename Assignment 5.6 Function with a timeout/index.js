"use strict";

function recursive(x) {
    if (x > 0) {
      console.log(x);
      recursive(x - 1);
    }
  }
  
recursive(10);