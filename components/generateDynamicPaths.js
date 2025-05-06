// utils/generateDynamicPaths.js
const blockchains = require('../app/rpcdb'); // Adjust the path as necessary

const generateBlockchainPaths = () => {
  const paths = [];
  
  // Get all network slugs for proper URL structure
  const allBlockchains = blockchains;
  
  // Generate network paths manually since we can't directly import the ES6 modules
  for (const blockchain of allBlockchains) {
    for (const network of blockchain.networks) {
      // Create slug manually following the same pattern as in networkUtils.js
      const slug = `${blockchain.name.toLowerCase().replace(/ /g, '-')}-${network.network.toLowerCase().replace(/ /g, '-')}`;
      
      // Add the network page path
      paths.push({
        loc: `/${slug}`,
        lastmod: new Date().toISOString(),
      });
      
      // Add the add-to-wallet path
      paths.push({
        loc: `/add-to-wallet/${slug}`,
        lastmod: new Date().toISOString(),
      });
    }
  }
  
  return paths;
};

module.exports = generateBlockchainPaths;
