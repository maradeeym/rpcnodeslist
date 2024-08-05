"use client";
import React, { Suspense } from 'react';
import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import CopyRpcUrl from './CopyRpcUrl';

const BlockchainDetails = ({ blockchain }) => {
  if (!blockchain) {
    return <p>Blockchain not found</p>;
  }

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <div className="p-4 sm:p-6 bg-base-200 min-h-screen">
        <div className="flex flex-col mb-6 sm:mb-8 bg-base-100 shadow-lg rounded-lg p-4 max-w-screen-2xl mx-auto w-full">
          <h2 id={blockchain.name} className="text-xl sm:text-2xl font-bold mb-4">
            {blockchain.name}
          </h2>
          {blockchain.networks.map((network, idx) => (
            <div key={idx} className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{network.network} RPCs</h3>
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
                      <td className="border text-center px-2 sm:px-4 py-2">{blockchain.name}</td>
                      <td className="border text-center px-2 sm:px-4 py-2">{network.network}</td>
                      <td className="border px-2 sm:px-4 py-2 flex items-center">
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
                          className="btn btn-accent btn-sm whitespace-nowrap flex items-center justify-center w-full"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 212 189" fill="none" className="mr-2 flex-shrink-0 inline-block">
                            <g clipPath="url(#clip0_1_70)">
                              <path d="M201.338 0L118.218 58.0459L132.889 26.5521L201.338 0Z" fill="#E17726"/>
                              <path d="M10.543 0L92.8295 58.6959L79.1116 26.5521L10.543 0Z" fill="#E27625"/>
                              <path d="M172.21 136.047L150.79 167.298L196.724 179.274L209.907 136.677L172.21 136.047Z" fill="#E27625"/>
                              <path d="M2.22388 136.677L15.2765 179.274L61.2108 167.298L39.9211 136.047L2.22388 136.677Z" fill="#E27625"/>
                              <path d="M58.8128 83.4783L46.6914 101.788L92.1323 103.678L90.6821 55.2163L58.8128 83.4783Z" fill="#E27625"/>
                              <path d="M153.068 83.4778L120.699 54.5663L119.769 103.678L165.21 101.788L153.068 83.4778Z" fill="#E27625"/>
                              <path d="M61.2109 167.298L89.5115 154.692L65.0735 137.047L61.2109 167.298Z" fill="#E27625"/>
                              <path d="M122.37 154.692L150.79 167.298L146.808 137.047L122.37 154.692Z" fill="#E27625"/>
                              <path d="M150.79 167.298L122.37 154.692L124.57 171.387L124.32 178.644L150.79 167.298Z" fill="#D5BFB2"/>
                              <path d="M61.2108 167.298L87.8108 178.644L87.6809 171.387L89.5115 154.692L61.2108 167.298Z" fill="#D5BFB2"/>
                              <path d="M88.1913 126.13L64.6836 119.823L81.3519 112.826L88.1913 126.13Z" fill="#233447"/>
                              <path d="M123.69 126.13L130.529 112.826L147.318 119.823L123.69 126.13Z" fill="#233447"/>
                              <path d="M61.2108 167.298L65.2035 136.047L39.9211 136.677L61.2108 167.298Z" fill="#CC6228"/>
                              <path d="M146.678 136.047L150.79 167.298L172.21 136.677L146.678 136.047Z" fill="#CC6228"/>
                              <path d="M165.21 101.788L119.769 103.678L123.69 126.13L130.529 112.826L147.318 119.823L165.21 101.788Z" fill="#CC6228"/>
                              <path d="M64.6836 119.823L81.3519 112.826L88.1913 126.13L92.1323 103.678L46.6914 101.788L64.6836 119.823Z" fill="#CC6228"/>
                              <path d="M46.6914 101.788L65.0735 137.047L64.6836 119.823L46.6914 101.788Z" fill="#E27525"/>
                              <path d="M147.318 119.823L146.808 137.047L165.21 101.788L147.318 119.823Z" fill="#E27525"/>
                              <path d="M92.1323 103.678L88.1913 126.13L93.1925 152.172L94.2526 117.711L92.1323 103.678Z" fill="#E27525"/>
                              <path d="M119.769 103.678L117.769 117.581L118.689 152.172L123.69 126.13L119.769 103.678Z" fill="#E27525"/>
                              <path d="M123.69 126.13L118.689 152.172L122.37 154.692L146.808 137.047L147.318 119.823L123.69 126.13Z" fill="#F5841F"/>
                              <path d="M64.6836 119.823L65.0735 137.047L89.5115 154.692L93.1925 152.172L88.1913 126.13L64.6836 119.823Z" fill="#F5841F"/>
                              <path d="M124.32 178.644L124.57 171.387L122.5 169.678H89.3816L87.6809 171.387L87.8108 178.644L61.2108 167.298L69.5903 174.295L89.1217 187.741H122.63L142.291 174.295L150.79 167.298L124.32 178.644Z" fill="#C0AC9D"/>
                              <path d="M122.37 154.692L118.689 152.172H93.1925L89.5115 154.692L87.6809 171.387L89.3816 169.678H122.5L124.57 171.387L122.37 154.692Z" fill="#161616"/>
                              <path d="M204.119 64.0229L211.088 33.1421L201.338 0L122.37 58.4358L153.068 83.4778L195.924 95.1944L205.284 84.8879L201.208 81.8478L207.667 75.7676L202.651 71.8975L209.11 66.8073L204.119 64.0229Z" fill="#763E1A"/>
                              <path d="M0.792969 33.1421L7.88193 64.0229L2.76091 66.8073L9.34022 71.8975L4.32419 75.7676L10.7832 81.8478L6.70716 84.8879L16.0671 95.1944L58.8128 83.4778L89.5115 58.4358L10.543 0L0.792969 33.1421Z" fill="#763E1A"/>
                              <path d="M195.924 95.1944L153.068 83.4778L165.21 101.788L146.808 137.047L172.21 136.677H209.907L195.924 95.1944Z" fill="#F5841F"/>
                              <path d="M58.8128 83.4778L16.0671 95.1944L2.22388 136.677H39.9211L65.0735 137.047L46.6914 101.788L58.8128 83.4778Z" fill="#F5841F"/>
                              <path d="M119.769 103.678L122.37 58.4358L132.889 26.5521H79.1116L89.5115 58.4358L92.1323 103.678L93.0624 117.841L93.1925 152.172H118.689L118.819 117.841L119.769 103.678Z" fill="#F5841F"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_1_70">
                                <rect width="211" height="189" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="flex-shrink-0">Add to Wallet</span>
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
      </div>
      <FAQ />
    </>
  );
};

export default BlockchainDetails;
