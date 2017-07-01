function makeGreeting() {

  return function(firstname, lastname) {
      if (language === "en") {
          console.log("Hello" + firstname + " " + lastname);

      }

      if (language === "es") {
        console.log("Hola" + firstname + " " + lastname);
      }
  }
}

var greetSpanish = makeGreeting("en");
var greetEnglish = makeGreeting("es"); //Each invocation creates own execution context, space in memory for the variables,parameters
greetSpanish("John", "Smith"); //invoking the returned function, "es" closured