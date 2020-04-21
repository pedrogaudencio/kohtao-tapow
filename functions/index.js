const functions = require('firebase-functions');
const { Nuxt } = require("nuxt-start");
const nuxtConfig = require("./nuxt.config.js");



// // https://firebase.google.com/docs/functions/write-firebase-functions


const config = {
  ...nuxtConfig,
  dev: false,
  debug: false,
  buildDir: "nuxt"
};
const nuxt = new Nuxt(config);

exports.app = functions.https.onRequest(async (req, res) => {
  await nuxt.ready();
  nuxt.render(req, res);
});
