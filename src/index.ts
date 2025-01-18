const { Command } = require("commander");
const figlet = require("figlet");

const program = new Command();

console.clear();

console.log(figlet.textSync("CLICK"));

program
  .version("0.0.2")
  .description("A digital clock for CLI")
  .option("-c, --color <COLOR>", "Change color")
  .option("-s, --second <VALUE>", "Display seconds [default: true]", true)
  .option("-f, --format <FORMAT>", "Change format [default: 24h]")
  .parse(process.argv);

const options = program.opts();

const displayTime = () => {
  const now = new Date();
  let hours: string = now.getHours().toString().padStart(2, "0");
  let minutes: string = now.getMinutes().toString().padStart(2, "0");
  let seconds: string = now.getSeconds().toString().padStart(2, "0");

  if (options.format === "12h") {
    hours = hours > "12" ? (parseInt(hours) - 12).toString() : hours;
    hours = hours === "00" ? "12" : hours;
  }

  if (!options.second) {
    seconds = "";
  }

  console.log(`${hours}:${minutes}${seconds ? `:${seconds}` : ""}`);
};

setInterval(console.clear, 1000);
setInterval(displayTime, 1000);
