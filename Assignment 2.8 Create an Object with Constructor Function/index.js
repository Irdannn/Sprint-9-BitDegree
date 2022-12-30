"use strict";

function Kid(elfManager, fullName, nice, nocppy, address) {
    this.elfManager = elfManager;
    this.fullName = fullName;
    this.nice = nice;
    this.nocppy = nocppy;
    this.address = address;
  };
  let kid2 = new Kid("Buddy", [`Cindy`, `Loui`], true, 16, [`5 Who Lane`, `Horton's Nose`, `Clover Pettal #5`]);
  console.log(JSON.stringify(kid2));
  console.log(kid2.fullName);
  let kid3 = new Kid("Buddy", [`Messi`, `Lio`], true, 14, [`Janti Soouth, Indonesia`]);
  console.log(JSON.stringify(kid3));
  console.log(kid3.fullName);
  let kid4 = new Kid("Buddy", [`Ronaldo`, `Christ`], false, 0, [`Janti North, Indonesia`]);
  console.log(JSON.stringify(kid4));
  console.log(kid4.fullName);
  
  let kids = [kid2, kid3, kid4];
  
  function naughty(kidsArray) {
    let output = [];
    kidsArray.forEach(function (element) {
      if (element.nice) {
        output.push(element)
      }
    });
    return output
  }
  const finalList = naughty(kids);
  console.log(finalList);

