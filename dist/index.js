#! /usr/bin/env node
"use strict";
const { Command } = require("commander");
const figlet = require("figlet");
const program = new Command();
console.clear();
console.log(figlet.textSync("CLICK - Clock for CLI"));
program
    .version("0.1.0")
    .description("A digital clock for CLI")
    .option("-c, --color <COLOR>", "Change color")
    .option("-s, --second <VALUE>", "Display seconds [default: yes]")
    .option("-f, --format <FORMAT>", "Change format [default: 24h]")
    .parse(process.argv);
const options = program.opts();
const displayTime = () => {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    if (options.format === "12h") {
        hours = hours > "12" ? (parseInt(hours) - 12).toString() : hours;
        hours = hours === "00" ? "12" : hours;
    }
    if (options.second == "no") {
        seconds = "";
    }
    console.log(figlet.textSync(`${hours} : ${minutes}${options.second !== "no" ? ` : ${seconds}` : ""}`));
};
const timezone = () => {
    console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
};
setInterval(console.clear, 1000);
setInterval(displayTime, 1000);
setInterval(timezone, 1000);
//# sourceMappingURL=index.js.map