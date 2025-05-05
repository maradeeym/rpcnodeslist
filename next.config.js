// Load the blockchains data
const blockchains = require('./app/rpcdb');

// Create redirects from old blockchain URLs to new network-specific URLs
const redirects = async () => {
  const redirectsArray = [];
  
  // For each blockchain, create a redirect from /[blockchainName] to /[blockchainName]-mainnet
  // or to the first available network if mainnet doesn't exist
  blockchains.forEach(blockchain => {
    const blockchainSlug = blockchain.name.toLowerCase().replace(/ /g, '-');
    
    // First try to find mainnet
    const mainnet = blockchain.networks.find(network => 
      network.network.toLowerCase() === 'mainnet'
    );
    
    if (mainnet) {
      // Redirect to the mainnet network
      redirectsArray.push({
        source: `/${blockchain.name.toLowerCase().replace(/ /g, '-')}`,
        destination: `/${blockchainSlug}-mainnet`,
        permanent: true
      });
    } else if (blockchain.networks.length > 0) {
      // If no mainnet, redirect to the first available network
      const firstNetwork = blockchain.networks[0].network.toLowerCase().replace(/ /g, '-');
      redirectsArray.push({
        source: `/${blockchain.name.toLowerCase().replace(/ /g, '-')}`,
        destination: `/${blockchainSlug}-${firstNetwork}`,
        permanent: true
      });
    }
  });
  
  return redirectsArray;
};

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      // NextJS <Image> component needs to whitelist domains for src={}
      "lh3.googleusercontent.com",
      "pbs.twimg.com",
      "images.unsplash.com",
      "logos-world.net",
    ],
  },
  redirects,
};

module.exports = nextConfig;
