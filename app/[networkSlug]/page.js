import React from 'react';
import blockchains from '@/app/rpcdb';
import NetworkDetails from '@/components/NetworkDetails';
import config from '@/config';
import { findNetworkFromSlug } from '@/libs/networkUtils';

export async function generateMetadata({ params }) {
  const networkSlug = decodeURIComponent(params.networkSlug);
  const { blockchain, network } = findNetworkFromSlug(blockchains, networkSlug);

  if (!blockchain || !network) {
    return {
      title: 'Network not found',
      description: 'The requested network information could not be found.',
    };
  }

  return {
    title: `${blockchain.name} ${network.network} RPC Endpoints | RPC Node List`,
    description: `Find ${blockchain.name} ${network.network} RPC APIs for Web3 development.`,
    keywords: `${blockchain.name} ${network.network} rpc, rpc node, rpc nodes`,
    alternates: {
      canonical: `https://${config.domainName}/${networkSlug}`
    },
  };
}

const Page = ({ params }) => {
  const networkSlug = decodeURIComponent(params.networkSlug);
  const { blockchain, network } = findNetworkFromSlug(blockchains, networkSlug);

  if (!blockchain || !network) {
    return <div>Network not found</div>;
  }

  return (
    <NetworkDetails blockchain={blockchain} network={network} />
  );
};

export default Page; 