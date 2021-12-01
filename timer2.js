const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  } else if (key === 'b') {
    process.stdout.write('\x07');
  } else if (
    key === '1' ||
    key === '2' ||
    key === '3' ||
    key === '4' ||
    key === '5' ||
    key === '6' ||
    key === '7' ||
    key === '8' ||
    key === '9'
    ) {
    console.log(`setting timer for ${key} seconds`);
    timeoutId(key);
  }
});

const timeoutId = function(num) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, num * 1000);
};