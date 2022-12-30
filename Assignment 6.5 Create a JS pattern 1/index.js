"use strict";

function Parent() {
    let name = "Isabelle Royce";
    let age = 38;
    let maritalStatus = "Divorced";
    let profession = "Engineer";
    let children = [`Jennifer`, `David`, `Xena`];
    let nice = true;
    let annualIncome = 20000;
    let ethnicity = "South African";
  
  
    return {
      Name: name,
      Age: age,
      Job: profession,
      Children: children,
      Good: nice,
    };
  }
  const newParent = Parent();
  console.log(JSON.stringify(newParent));