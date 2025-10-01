"use client";
import React, { Suspense, useState } from 'react';
import blockchains from './rpcdb';
import Link from 'next/link';
import Header from "@/components/Header";
import { generateNetworkSlug } from '@/libs/networkUtils';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter blockchains based on search query
  const filteredBlockchains = blockchains.filter(blockchain => 
    blockchain.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="w-full max-w-6xl mx-auto p-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 my-8">RPC Endpoints for All Blockchains</h1>
        
        {/* Search Bar */}
<div className="flex justify-center mb-16">
          <div className="form-control w-full max-w-md">
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Search blockchains..." 
                className="input input-bordered w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlockchains.map((blockchain, idx) => (
            <div key={idx} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-xl">
                  {blockchain.logo && (
                    <img
                      src={blockchain.logo}
                      alt={`${blockchain.name} logo`}
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  {blockchain.name}
                </h2>
                <div className="divider my-2"></div>
                <ul className="space-y-2">
                  {blockchain.networks.map((network, networkIdx) => {
                    const slug = generateNetworkSlug(blockchain.name, network.network);
                    return (
                      <li key={networkIdx}>
                        <Link href={`/${slug}`} className="btn btn-outline btn-sm w-full justify-start">
                          {network.network}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {filteredBlockchains.length === 0 && (
          <div className="text-center py-8">
            <p className="text-lg">No blockchains found matching &quot;{searchQuery}&quot;</p>
          </div>
        )}
      </main>
    </>
  );
}
