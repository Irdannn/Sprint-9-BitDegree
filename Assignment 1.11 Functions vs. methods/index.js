"use strict";

const catchPhrases = {
    santaGreeting: function () {
      const santa = "HO-ho-hoo! ME-Rry Christmas!";
      console.log(santa);
      return santa;
    },
    santaGreeting(){},
    IrdanCatchphrase: function (input) {
      const irdan = `${input}, Aku Irdan`;
      console.log(irdan);
      return irdan;
    },
  }
catchPhrases.IrdanCatchphrase("hola");