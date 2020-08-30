const js = require('fs');

const image = js.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImage = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(image);
  response.end();
};

module.exports.getImage = getImage;
