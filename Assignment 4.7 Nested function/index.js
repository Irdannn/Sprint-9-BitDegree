"use strict";

function deliveryRecipients(elfManager, fullName, nice, nocppy, address) {
    this.elfManager = elfManager;
    this.fullName = fullName.join(` `);
    this.nice = nice;
    this.nocppy = nocppy;
    this.address = address;
  
    function greeting() {
        return this.salutation = greeting("Hola");
    }

    function addressFunction(input) {
        return this.address = {
          type: input[0],
          line1: input[1],
          line2: input[2],
          city: input[3],
          state: input[4],
          zip: input[5]
        }
    }
}
  
let recipient1 =
    new deliveryRecipients("elf987", [`Ilyana`, `Petrov`], true, 8,
      ["school", "735 Boyle Hill Rd", "Breaker Dorm, 201B", "Scarsdale",
        "New York", 10257]);
  
console.log(JSON.stringify(recipient1));