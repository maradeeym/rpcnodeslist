import React from 'react';
import Link from 'next/link';
import blockchains from '@/app/rpcdb';
import CopyRpcUrl from './CopyRpcUrl';

const RpcList = () => {
  return (
    <div className="p-4 sm:p-6 bg-base-200 min-h-screen">
      {blockchains.map((blockchain, index) => (
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
                    </tr>
                  </thead>
                  <tbody>
                    {network.rpcUrls.map((url, urlIdx) => (
                      <tr key={urlIdx} className="bg-green-50">
                        <td className="border text-center px-2 sm:px-4 py-2">{blockchain.name}</td>
                        <td className="border text-center px-2 sm:px-4 py-2">{network.network}</td>
                        <td className="border px-2 sm:px-4 py-2 flex items-center justify-between">
                          <CopyRpcUrl url={url} />
                        </td>
                        <td className="border text-center px-2 sm:px-4 py-2">{network.chainId}</td>
                        <td className="border text-center px-2 sm:px-4 py-2">{network.nativeCurrency}</td>
                        <td className="border text-center px-2 sm:px-4 py-2">
                          <a
                            href={network.blockExplorer}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            {network.blockExplorer}
                          </a>
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
