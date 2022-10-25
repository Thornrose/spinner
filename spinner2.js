const frames = "|/-\\|/-\\|";
let timer = 100;

for (const frame of frames) {

  setTimeout(() => {
    process.stdout.write(`\r${frame}`);
  }, timer);

  timer += 200;
}

setTimeout(() => {
  process.stdout.write("\n");

}, timer + 50);