import React from 'react';
import blockchains from '@/app/rpcdb';

const BlockchainButtons = () => {
  return (
    <div className="p-6 bg-base-200">
      <div className="flex flex-wrap gap-4 max-w-screen-2xl justify-center mx-auto w-full">
        {blockchains.map((blockchain, index) => (
          <a
            key={index}
            href={`#${blockchain.name}`}
            className="btn btn-outline btn-sm"
          >
            {blockchain.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlockchainButtons;
