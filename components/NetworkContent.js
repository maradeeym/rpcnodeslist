import React from 'react';
import { hexToDecimal, getNetworkFaqs } from '@/libs/networkUtils';

export const NetworkIntro = ({ blockchain, network }) => {
  const title = `${blockchain.name} ${network.network}`;
  const endpointPhrase =
    network.rpcUrls.length === 1
      ? 'is a public RPC endpoint'
      : `are ${network.rpcUrls.length} public RPC endpoints`;

  return (
    <p className="mb-4 text-base-content/80 leading-relaxed">
      {title} uses {network.nativeCurrency} as its native currency.
      {network.chainId &&
        ` Its Chain ID is ${hexToDecimal(network.chainId)} (${network.chainId}).`}
      {' '}Below {endpointPhrase} you can use to connect wallets, dApps, and
      developer tools to {title}.
    </p>
  );
};

export const NetworkCodeSnippet = ({ blockchain, network }) => {
  if (!network.chainId) return null;

  const title = `${blockchain.name} ${network.network}`;
  const rpcUrl = network.rpcUrls[0];
  const code = `import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider("${rpcUrl}");

const network = await provider.getNetwork();
console.log(network.chainId); // ${hexToDecimal(network.chainId)}n`;

  return (
    <div className="mb-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-2">
        Connect to {title} with ethers.js
      </h2>
      <pre className="bg-slate-900 text-slate-100 text-sm rounded-lg p-4 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export const NetworkFaq = ({ blockchain, network }) => {
  const title = `${blockchain.name} ${network.network}`;
  const faqs = getNetworkFaqs(blockchain, network);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-2">{title} FAQ</h2>
      <div className="space-y-2">
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            className="collapse collapse-arrow bg-base-100 border border-base-300"
          >
            <summary className="collapse-title text-sm sm:text-base font-medium">
              {faq.question}
            </summary>
            <div className="collapse-content text-sm sm:text-base">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
};
