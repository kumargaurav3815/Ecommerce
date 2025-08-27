/** @format */

const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AeRFzhK4m9eBc2hCgSHu2lT1uZMN1E6xGikgL_pcEjkdrwBvX0xsQg8a8ANZHdTVFe5fyhjApfT4lNeZ",
  client_secret:
    "ECzGbwl3u9RgYu8wg5Jkt0qBxCC5Fe7KJJcSB7kIy4MxJJITiP3UpwwMGcsE9o2WxtqjP-hJ5v7F2dDC",
});

module.exports = paypal;
