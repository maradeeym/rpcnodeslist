// utils/generateDynamicPaths.js
const blockchains = require('../app/rpcdb'); // Adjust the path as necessary

const generateBlockchainPaths = () => {
  const paths = [];

  // Get all network slugs for proper URL structure
  const allBlockchains = blockchains;

  // Generate paths manually since we can't directly import the ES6 modules
  for (const blockchain of allBlockchains) {
    // Create slug manually following the same pattern as in networkUtils.js
    const blockchainSlug = blockchain.name.toLowerCase().replace(/ /g, '-');

    // Add the "add to wallet" guide path (one per blockchain)
    paths.push({
      loc: `/add-to-wallet/${blockchainSlug}`,
      lastmod: new Date().toISOString(),
    });

    for (const network of blockchain.networks) {
      const slug = `${blockchainSlug}-${network.network.toLowerCase().replace(/ /g, '-')}`;

      // Add the network page path
      paths.push({
        loc: `/${slug}`,
        lastmod: new Date().toISOString(),
      });
    }
  }

  return paths;
};

module.exports = generateBlockchainPaths;
