const http = require("http");
const casual = require("casual");

casual.define("randomCasualUser", function () {
  return {
    randomCasualUser:
      casual.name_prefix + " " + casual.first_name + " " + casual.last_name,
  };
});

console.log(casual.randomCasualUser);
