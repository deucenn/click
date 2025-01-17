"use strict";
const { Command } = require("commander");
const figlet = require("figlet");
const program = new Command();
console.log(figlet.textSync("CLICK"));
program
    .version("1.0.0")
    .description("A digital clock for CLI")
    .option("-c, --color <COLOR>", "Change color")
    .option("-s, --second <VALUE>", "Display seconds [default: 1]")
    .option("-f, --format <FORMAT>", "Change format")
    .parse(process.argv);
const options = program.opts();
//# sourceMappingURL=index.js.map