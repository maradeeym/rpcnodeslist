import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DRPCBox = () => {
  return (
    <div className="max-w-sm p-8 bg-white rounded-lg shadow-lg my-4">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="relative w-20 h-20 sm:mr-4 mb-3 sm:mb-0">
          <Image 
            src="/drpc_logo.png" 
            alt="dRPC Logo" 
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold">dRPC</h2>
          <p className="text-base mb-4">
            <br />
            - 95+ blockchain RPCs
            <br />
            - No rate limits
            <br />
            - AI-driven load balancer
          </p>
          <Link 
            href="https://drpc.org?ref=e3c7c5" 
            className="block w-full py-3 text-center text-white font-medium bg-green-500 hover:bg-green-600 rounded-md transition duration-300"
          >
            Connect via dRPC
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DRPCBox;