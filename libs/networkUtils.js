/**
 * Utility functions for handling network slugs and routes
 */

/**
 * Generate a URL slug from a blockchain name
 */
export function generateBlockchainSlug(blockchainName) {
  return blockchainName.toLowerCase().replace(/ /g, '-');
}

/**
 * Generate a URL slug from blockchain name and network name
 */
export function generateNetworkSlug(blockchainName, networkName) {
  return `${generateBlockchainSlug(blockchainName)}-${networkName.toLowerCase().replace(/ /g, '-')}`;
}

/**
 * Find a blockchain and network from a given slug
 */
export function findNetworkFromSlug(blockchains, slug) {
  let targetBlockchain = null;
  let targetNetwork = null;

  for (const blockchain of blockchains) {
    for (const network of blockchain.networks) {
      const networkSlug = generateNetworkSlug(blockchain.name, network.network);
      if (networkSlug === slug) {
        targetBlockchain = blockchain;
        targetNetwork = network;
        break;
      }
    }
    if (targetBlockchain) break;
  }

  return { blockchain: targetBlockchain, network: targetNetwork };
}

/**
 * Find a blockchain from a given blockchain slug
 */
export function findBlockchainFromSlug(blockchains, slug) {
  return blockchains.find(blockchain => generateBlockchainSlug(blockchain.name) === slug) || null;
}

/**
 * Get all network slugs from the blockchains data
 * Useful for generating static paths
 */
export function getAllNetworkSlugs(blockchains) {
  const slugs = [];
  
  for (const blockchain of blockchains) {
    for (const network of blockchain.networks) {
      const slug = generateNetworkSlug(blockchain.name, network.network);
      slugs.push(slug);
    }
  }
  
  return slugs;
} 