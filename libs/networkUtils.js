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

/**
 * Convert a hex chain ID (e.g. "0xa4b1") to its decimal form (e.g. 42161)
 */
export function hexToDecimal(hexChainId) {
  return parseInt(hexChainId, 16);
}

/**
 * Build a list of FAQ question/answer pairs for a network page.
 * Used for both the on-page FAQ section and the FAQPage schema,
 * so the two never drift apart.
 */
export function getNetworkFaqs(blockchain, network) {
  const title = `${blockchain.name} ${network.network}`;
  const faqs = [];

  if (network.rpcUrls.length === 1) {
    faqs.push({
      question: `What is the RPC URL for ${title}?`,
      answer: `The public RPC URL for ${title} is ${network.rpcUrls[0]}.`,
    });
  } else {
    faqs.push({
      question: `What is the RPC URL for ${title}?`,
      answer: `There are ${network.rpcUrls.length} public RPC endpoints for ${title}, including ${network.rpcUrls[0]}. See the full list in the table above.`,
    });
  }

  if (network.chainId) {
    faqs.push({
      question: `What is the Chain ID for ${title}?`,
      answer: `The Chain ID for ${title} is ${hexToDecimal(network.chainId)} (${network.chainId} in hexadecimal).`,
    });
  }

  faqs.push({
    question: `What is the native currency of ${title}?`,
    answer: `The native currency of ${title} is ${network.nativeCurrency}.`,
  });

  faqs.push({
    question: `How do I add ${title} to MetaMask?`,
    answer: `Use the "Add to Wallet" button on this page to add ${title} to MetaMask automatically, or follow our step-by-step guide for ${blockchain.name}.`,
  });

  return faqs;
} 