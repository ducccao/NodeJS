let sum = 0;
for (let i = 0; i < process.argv.length; ++i) {
  sum++;
  console.log(process.argv[i]);
}
console.log(sum);
