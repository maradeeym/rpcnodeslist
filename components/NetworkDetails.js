"use client";
import React, { Suspense, useState, useEffect } from 'react';
import Header from '@/components/Header';
import CopyRpcUrl from './CopyRpcUrl';
import DRPCBox from './drpcbox';
import Link from 'next/link';
import { generateNetworkSlug } from '@/libs/networkUtils';

const NetworkDetails = ({ blockchain, network }) => {
  const [rpcStatus, setRpcStatus] = useState({});

  useEffect(() => {
    const checkRpcStatus = async () => {
      const status = {};
      const requests = [];

      for (const url of network.rpcUrls) {
        requests.push(
          fetch('/api/check-rpc', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
          })
            .then(response => response.json())
            .then(data => {
              status[url] = data.status === 'ok';
            })
            .catch(() => {
              status[url] = false;
            })
        );
      }

      await Promise.all(requests);
      setRpcStatus(status);
    };

    checkRpcStatus();
  }, [network]);

  if (!blockchain || !network) {
    return <p>Network not found</p>;
  }

  // Generate links to other networks of the same blockchain
  const otherNetworks = blockchain.networks
    .filter(n => n.network !== network.network)
    .map(n => {
      const slug = generateNetworkSlug(blockchain.name, n.network);
      return { name: n.network, slug };
    });

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <div className="p-4 sm:p-6 bg-base-200">
        <div className="flex flex-col mb-6 sm:mb-8 bg-base-100 shadow-lg rounded-lg p-4 max-w-screen-2xl mx-auto w-full">
          <h1 className="text-xl sm:text-2xl font-bold mb-4">
            {blockchain.name} {network.network} RPC Endpoints
          </h1>
          
          {/* Navigation links to other networks */}
          {otherNetworks.length > 0 && (
            <div className="mb-4">
              <h3 className="text-md font-semibold mb-2">Other {blockchain.name} Networks:</h3>
              <div className="flex flex-wrap gap-2">
                {otherNetworks.map((net, idx) => (
                  <Link 
                    key={idx} 
                    href={`/${net.slug}`}
                    className="badge badge-primary badge-outline p-2"
                  >
                    {net.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          <DRPCBox />
          
          <div className="mb-4 sm:mb-6">
            <div className="overflow-x-auto">
              <table className="table-auto w-full mb-4 border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-2 sm:px-4 py-2">Blockchain</th>
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
                          {rpcStatus[url] === undefined ? (
                            <span className="mr-2 animate-pulse">⏳</span> // Awaiting symbol
                          ) : rpcStatus[url] ? (
                            <span className="mr-2 animate-pulse">✅</span> // Online icon
                          ) : (
                            <span className="mr-2">🔴</span> // Offline icon
                          )}
                          {blockchain.name}
                        </div>
                      </td>
                      <td className="border text-center px-2 sm:px-4 py-2">
                        <CopyRpcUrl url={url} />
                      </td>
                      <td className="border text-center px-2 sm:px-4 py-2">{network.chainId}</td>
                      <td className="border text-center px-2 sm:px-4 py-2">{network.nativeCurrency}</td>
                      <td className="border text-center px-2 sm:px-4 py-2">
                        {network.blockExplorer && (
                          <a
                            href={network.blockExplorer}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            {network.blockExplorer}
                          </a>
                        )}
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
                                  blockExplorerUrls: network.blockExplorer ? [network.blockExplorer] : []
                                }]
                              }).catch((error) => {
                                console.error(error);
                                alert('Failed to add network to wallet.');
                              });
                            } else {
                              alert('Please install a Web3 wallet like MetaMask to use this feature.');
                            }
                          }}
                          className="btn btn-accent btn-sm whitespace-nowrap flex items-center justify-center w-full"
                        >
                          <span className="flex-shrink-0">Add to Wallet</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NetworkDetails; 