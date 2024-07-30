//This is next-sitemap.config.js
/*
module.exports = {
  // REQUIRED: add your own domain name here (e.g. https://shipfa.st),
  siteUrl: process.env.SITE_URL || "https://rpcnodelist.com",
  generateRobotsTxt: true,
  // use this to exclude routes from the sitemap (i.e. a user dashboard). By default, NextJS app router metadata files are excluded (https://nextjs.org/docs/app/api-reference/file-conventions/metadata)
  exclude: ["/twitter-image.*", "/opengraph-image.*", "/icon.*"],
};
*/
const generateBlockchainPaths = require('./components/generateDynamicPaths');

module.exports = {
  siteUrl: process.env.SITE_URL || "https://rpcnodelist.com",
  generateRobotsTxt: true,
  exclude: ["/twitter-image.*", "/opengraph-image.*", "/icon.*"],
  additionalPaths: async (config) => {
    const blockchainPaths = generateBlockchainPaths();
    return blockchainPaths;
  },
};
