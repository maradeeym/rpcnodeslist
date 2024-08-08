// utils/generateDynamicPaths.js
const blockchains = require('../app/rpcdb'); // Adjust the path as necessary

const generateBlockchainPaths = () => {
  return blockchains.map(blockchain => ([
    {
      loc: `/${blockchain.name.toLowerCase()}`,
      lastmod: new Date().toISOString(), // or fetch actual lastmod if available
    },
    {
      loc: `/add-to-wallet/${blockchain.name.toLowerCase()}`,
      lastmod: new Date().toISOString(), // or fetch actual lastmod if available
    }
  ])).flat();
};

module.exports = generateBlockchainPaths;
