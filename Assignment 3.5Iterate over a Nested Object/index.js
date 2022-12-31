"use strict";

let kid5 = {
    elfManager: "Buddy",
    fullName: ["Ozzy", "Who"],
    nice: true,
    nocppy: 3,
    address: {
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
        zip: "94611",
      },
    },
  };

console.log(Object.keys(kid5));
console.log(Object.keys(kid5.address));
console.log(Object.keys(kid5.address.primary));
console.log(Object.keys(kid5.address.alternate));

for (let temporaryVariable of Object.keys(kid5)) {
  console.log(`The key ${temporaryVariable} has value ${kid5[temporaryVariable]}`);
}