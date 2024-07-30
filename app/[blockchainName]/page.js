import React from 'react';
import blockchains from '@/app/rpcdb';
import BlockchainDetails from '@/components/BlockchainDetails';

export async function generateMetadata({ params }) {
  const blockchainName = decodeURIComponent(params.blockchainName);
  const blockchain = blockchains.find(bc => bc.name.toLowerCase() === blockchainName.toLowerCase());

  if (!blockchain) {
    return {
      title: 'Blockchain not found',
      description: 'The requested blockchain information could not be found.',
    };
  }

  return {
    title: `${blockchain.name} RPC Endpoints | RPC Node List`,
    description: `Find ${blockchain.name} Mainnet and Testnet RPC APIs for Web3 development.`,
    keywords: `${blockchain.name} rpc, rpc node, rpc nodes,`,
    alternates: {
      canonical: `https://www.rpcnodelist.com/${blockchain.name}`
    },
  };
}

const Page = ({ params }) => {
  const blockchainName = decodeURIComponent(params.blockchainName);
  const blockchain = blockchains.find(bc => bc.name.toLowerCase() === blockchainName.toLowerCase());

  return (
    <BlockchainDetails blockchain={blockchain} />
  );
};

export default Page;


