function deliveryRecipients(elfManager, fullName, nice, nocppy, address, parents) {
    this.elfManager = elfManager;
    this.fullName = fullName.join(` `);
    this.nice = nice;
    this.nocppy = nocppy;
    this.address = address;
    this.parents = parents;
  }
  
  deliveryRecipients.prototype.prototypeGreeting = `Merry Christmas!`;
  console.log(deliveryRecipients.prototype.prototypeGreeting);
  
  const recipient2 = new deliveryRecipients("elfSUPREME", [`Boris`, `Spyder`], false, -5, [], ["pete townshend", "john entwistle"]);
  console.log(recipient2)