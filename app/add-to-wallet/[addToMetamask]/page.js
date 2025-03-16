import React from 'react';
import blockchains from '@/app/rpcdb';
import config from '@/config';
import AddBlockchainGuide from '@/components/AddBlockchainGuide';
import AddToWalletButtons from '@/components/AddToWalletButtons';

export async function generateMetadata({ params }) {
  const blockchainName = decodeURIComponent(params.addToMetamask);
  const blockchain = blockchains.find(bc => bc.name.toLowerCase() === blockchainName.toLowerCase());

  if (!blockchain) {
    return {
      title: 'Blockchain not found',
      description: 'The requested blockchain information could not be found.',
    };
  }

  return {
    title: `How to add ${blockchain.name} to Metamask or Other Wallets | RPC Node List`,
    description: `Find out how to add ${blockchain.name} Mainnet and Testnet RPC APIs to Metamask or other wallets.`,
    keywords: `add ${blockchain.name} to metamask, add ${blockchain.name} to wallet, ${blockchain.name} rpc, ${blockchain.name} rpc node, ${blockchain.name} rpc nodes,`,
    alternates: {
      canonical: `https://${config.domainName}/add-to-wallet/${blockchain.name.toLowerCase()}`
    },
  };
}

const AddToMetamaskPage = ({ params }) => {
  const blockchainName = decodeURIComponent(params.addToMetamask);
  const blockchain = blockchains.find(bc => bc.name.toLowerCase() === blockchainName.toLowerCase());

  if (!blockchain) {
    return <div>Blockchain not found</div>;
  }

  return (
    <div>
      <AddBlockchainGuide blockchain={blockchain} />
      <AddToWalletButtons />
    </div>
  );
};

export default AddToMetamaskPage;
