const environment = require("./environments");
const propertiesReader = require("properties-reader");
const properties = new propertiesReader(environment);

const someVal = properties.get("main.app.port");

// npm start env=development
// npm start env=production
