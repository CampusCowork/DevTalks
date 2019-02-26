"use strict";

const ApiService = require("moleculer-web");

module.exports = {
  mixins: [ApiService],
  name: "api",
  
  settings: {
    routes: [{
      path: "/math",
      aliases: {
        "GET fibo": "math.fibo",
        "GET add": "math.add",
        "POST sub": "math.sub",
      }
    }]
  }
};
