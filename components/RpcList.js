"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import blockchains from '@/app/rpcdb';
import CopyRpcUrl from './CopyRpcUrl';
import axios from 'axios';

const RpcList = () => {
  const [rpcStatus, setRpcStatus] = useState({});
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const checkRpcStatus = async () => {
      const status = {};
      for (const blockchain of blockchains) {
        for (const network of blockchain.networks) {
          for (const url of network.rpcUrls) {
            try {
              const response = await axios.post('/api/check-rpc', { url });
              status[url] = response.data.status === 'ok';
            } catch (error) {
              status[url] = false;
            }
          }
        }
      }
      setRpcStatus(status);
    };

    checkRpcStatus();
  }, []);

  const filteredBlockchains = blockchains.filter(blockchain =>
    blockchain.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 bg-base-200 min-h-screen">
      <input
        type="text"
        placeholder="Search for blockchain..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="input input-bordered w-full mb-4"
      />
      {filteredBlockchains.map((blockchain, index) => (
        <div key={index} className="flex flex-col mb-6 sm:mb-8 bg-base-100 shadow-lg rounded-lg p-4 max-w-screen-2xl mx-auto w-full">
          <h2 id={blockchain.name} className="text-xl sm:text-2xl font-bold mb-4">{blockchain.name}</h2>
          {blockchain.networks.map((network, idx) => (
            <div key={idx} className="mb-4 sm:mb-6">
              <Link href={`/${blockchain.name}`} className="text-lg sm:text-xl font-semibold mb-2 text-blue-500 hover:underline">
                {blockchain.name} {network.network} RPC
              </Link>
              <div className="overflow-x-auto">
                <table className="table-auto w-full mb-4 border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border px-2 sm:px-4 py-2">Blockchain</th>
                      <th className="border px-2 sm:px-4 py-2">Network</th>
                      <th className="border px-2 sm:px-4 py-2">RPC URL</th>
                      <th className="border px-2 sm:px-4 py-2">Chain ID</th>
                      <th className="border px-2 sm:px-4 py-2">Native Currency</th>
                      <th className="border px-2 sm:px-4 py-2">Block Explorer</th>
                      <th className="border px-2 sm:px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                  {network.rpcUrls.map((url, urlIdx) => (
                      <tr key={urlIdx} className="bg-green-50">
                        <td className="border text-center px-2 sm:px-4 py-2">
                        <div className="flex items-center justify-center">
                          {rpcStatus[url] ? (
                            <span className="mr-2 animate-pulse">✅</span>
                          ) : (
                            <span className="mr-2">🔴</span>
                          )}
                          {blockchain.name}
                        </div>
                        </td>
                        <td className="border text-center px-2 sm:px-4 py-2">{network.network}</td>
                        <td className="border text-center px-2 sm:px-4 py-2">
                          <CopyRpcUrl url={url} />
                        </td>
                        <td className="border text-center px-2 sm:px-4 py-2">{network.chainId}</td>
                        <td className="border text-center px-2 sm:px-4 py-2">{network.nativeCurrency}</td>
                        <td className="border text-center px-2 sm:px-4 py-2">
                          <a
                            href={network.blockExplorer}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline flex-shrink-0"
                          >
                            {network.blockExplorer}
                          </a>
                        </td>
                        <td className="border text-center px-2 sm:px-4 py-2">
                        <button
                          onClick={() => {
                            if (typeof window.ethereum !== 'undefined') {
                              window.ethereum.request({
                                method: 'wallet_addEthereumChain',
                                params: [{
                                  chainId: `0x${parseInt(network.chainId).toString(16)}`,
                                  chainName: `${blockchain.name} ${network.network}`,
                                  nativeCurrency: {
                                    name: network.nativeCurrency,
                                    symbol: network.nativeCurrency,
                                    decimals: 18
                                  },
                                  rpcUrls: [url],
                                  blockExplorerUrls: [network.blockExplorer]
                                }]
                              }).catch((error) => {
                                console.error(error);
                                alert('Failed to add network to wallet.');
                              });
                            } else {
                              alert('Please install a Web3 wallet like MetaMask to use this feature.');
                            }
                          }}
                          className="btn btn-sm btn-accent whitespace-nowrap"
                        >
                          Add to Wallet
                        </button>
                      </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RpcList;
