const fs = require("fs");

let fileBuffer;

let fileStream = fs.createReadStream(__dirname + "/temp/hiClone.txt");

function getChunks() {
  let chunks = [];
  fileStream.once("end", () => {
    fileBuffer = Buffer.concat(chunks);
  });

  fileStream.on("data", (chunk) => {
    chunks.push(chunk);

    console.log(chunk);
  });
  return chunks;
}

async function main() {
  const data = await getChunks();
  console.log(data);
}

main();
