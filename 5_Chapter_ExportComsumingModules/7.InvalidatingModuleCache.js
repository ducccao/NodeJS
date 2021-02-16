//const a = require("./1.2.HiVenus");

const rpath = require.resolve("./1.2.HiVenus.js");
delete require.cache[rpath];

const a = require("./1.2.HiVenus");

a.hi("As");
