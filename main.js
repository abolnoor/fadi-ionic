const express = require("express");
const path = require("path");

const getTranslatedServer = (lang) => {
  const distFolder = path.join(
    process.cwd(),
    'www/server'
  );
  const server = require(`${distFolder}/main.js`);
  return server.app(lang);
};

function run() {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const appFr = getTranslatedServer("fr");
  const appAr = getTranslatedServer("ar");
  const appEn = getTranslatedServer("en");

  const server = express();
  server.use("/fr", appFr);
  server.use("/ar", appAr);
  server.use("/en", appEn);
  server.use("", appEn);

  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();