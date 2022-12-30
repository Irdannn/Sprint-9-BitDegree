"use strict";

function santaGreeting(input) {
  const santaCatchphrase = `Hello ${input} - HO ho ho! ME-rry Christmas`
  console.log(santaCatchphrase);
  return santaCatchphrase;
}
santaGreeting()
console.log(`You know what Santa always says? "${santaGreeting()}"`);