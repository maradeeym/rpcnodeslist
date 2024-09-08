"use client"
import React, { useState } from 'react';
import blockchains from '@/app/rpcdb';

const BlockchainFilter = () => {
  const [filter, setFilter] = useState('');

  const filteredBlockchains = blockchains.filter(blockchain =>
    blockchain.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-6 bg-base-200">
      <input
        type="text"
        placeholder="Filter blockchains..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="input input-bordered w-full mb-4"
      />
      <div className="flex flex-wrap gap-4 max-w-screen-2xl justify-center mx-auto w-full">
        {filteredBlockchains.map((blockchain, index) => (
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

export default BlockchainFilter;