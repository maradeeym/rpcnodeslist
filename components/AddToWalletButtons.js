import React from 'react';
import blockchains from '@/app/rpcdb';

const AddToWalletButtons = () => {
  return (
    <div className="p-6 bg-base-200">
      <div className="flex flex-wrap gap-4 max-w-screen-2xl justify-center mx-auto w-full">
        {blockchains.map((blockchain, index) => (
          <a
            key={index}
            href={`/add-to-wallet/${blockchain.name}`}
            className="btn btn-outline btn-sm"
          >
            Add {blockchain.name} to Wallet
          </a>
        ))}
      </div>
    </div>
  );
};

export default AddToWalletButtons;
