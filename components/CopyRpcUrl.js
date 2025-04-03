// components/CopyRpcUrl.js
"use client";
import React, { useState } from 'react';

const CopyRpcUrl = ({ url }) => {
  const [showModal, setShowModal] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 1500);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <p href={url} className="text-gray-500">{url}</p>
        <button
          onClick={copyToClipboard}
          className="btn btn-outline btn-sm mx-4"
        >
          Copy
        </button>
      </div>
      {showModal && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 p-2 bg-green-500 text-white text-sm rounded shadow-lg z-50">
                  ✂ Copied!
        </div>
      )}
    </div>
  );
};

export default CopyRpcUrl;

