"use strict";

/* Your "Kid" constructor function */
function Kid(elfManager, fullName, nice, nocppy, address) {
    this.elfManager = elfManager;
    this.fullName = fullName;
    this.nice = nice;
    this.nocppy = nocppy;
    this.address = address;
  };
  
  /* The main kid object that you will be working with */
  let kid4 = new Kid("Buddy", [`Ozzy`, `Who`], true, 3, {
    primary: {
      type: "Primary",
      line1: "17 Who Lane",
      line2: "Horton's Nose",
      city: "Clover Pettal #5",
      state: "OR",
      zip: "97060",
    },
    alternate: {
      type: "Secondary",
      line1: "Care of Mr. & Mrs. Pines",
      line2: "199 Oakland Ave.",
      city: "Piedmont",
      state: "CA",
      zip: "94611"
    }
  })
  
  console.log(kid4 ?.address ?.secondary || "Doesn't have secondary address");
  console.log(kid4 ?.nice == true || "Wasn't good this year");