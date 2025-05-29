import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';

const DRPCBox = () => {
  return (
    <div className="max-w-sm bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-lg border border-slate-200 overflow-hidden mb-12">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="relative w-12 h-12 mr-4">
            <Image 
              src="/drpc_logo.png" 
              alt="dRPC Logo" 
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800">dRPC</h2>
            <p className="text-sm text-slate-500">Decentralized RPC Network</p>
          </div>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <Globe className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
            <p className="text-sm text-slate-700">95+ blockchain RPCs</p>
          </div>
          <div className="flex items-start">
            <Zap className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
            <p className="text-sm text-slate-700">No rate limits</p>
          </div>
          <div className="flex items-start">
            <Shield className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
            <p className="text-sm text-slate-700">AI-driven load balancer</p>
          </div>
        </div>
        
        <Link 
          href="https://drpc.org?ref=e3c7c5&utm_source=rpcnodelist" 
          className="group flex items-center justify-center w-full py-3 px-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-all duration-200"
        >
          Connect via dRPC
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default DRPCBox;