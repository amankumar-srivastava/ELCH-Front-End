const path = require("path");
const fs = require("fs");

let ROOT = process.env.PWD;

if (!ROOT) {
  ROOT = process.cwd();
}

const config = {
  // Your website's name, used for favicon meta tags
  site_name: "ELCH Onboading Automation Dashboard! 🚀",

  // Your website's description, used for favicon meta tags
  site_description: "ELCH Onboading Automation Dashboard! 🚀",

  // Your website's URL, used for sitemap
  site_url: "",

  // Google Analytics tracking ID (leave blank to disable)
  googleAnalyticsUA: "",

  // The viewport meta tag added to your HTML page's <head> tag
  viewport: "width=device-width,initial-scale=1",

  // Source file for favicon generation. 512x512px recommended.
  favicon: path.join(ROOT, "/src/images/favicon.ico"),

  // Local development URL
  dev_host: "172.31.83.19",

  // Local development port
  port: process.env.PORT || 8083,

  // Advanced configuration, edit with caution!
  env: process.env.NODE_ENV,
  root: ROOT,
  paths: {
    config: "config",
    src: "src",
    dist: "dist",
  },
  package: JSON.parse(
    fs.readFileSync(path.join(ROOT, "/package.json"), { encoding: "utf-8" })
  ),
};

module.exports = config;
