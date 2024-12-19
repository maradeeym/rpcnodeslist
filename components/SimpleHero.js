import React from 'react';

const SimpleHero = () => {
  return (
    <div className="py-14 px-6 bg-base-200">
      <div className="flex flex-col gap-8 max-w-screen-2xl justify-center mx-auto w-full">
      <div className="flex justify-center">
        <a href="https://drpc.org?ref=2767f6" title="Powered by dRPC">
          <img
            style={{ width: "150px", height: "38px" }}
            src="https://drpc.org/images/external/powered-by-drpc-light.svg"
            alt="Powered by dRPC"
          />
        </a>
      </div>
        <h1 className="font-extrabold text-2xl sm:text-4xl lg:text-6xl tracking-tight md:-mb-4 text-center">
            Blockchain RPC Endpoints for < br/> Web3 developers
        </h1>
      </div>
    </div>
  );
};

export default SimpleHero;