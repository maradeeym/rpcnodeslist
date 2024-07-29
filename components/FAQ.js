"use client";

import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "What is the RPC node?",
    answer: <div className="space-y-2 leading-relaxed">An RPC node is a server that allows remote procedure calls (RPC) to interact with a blockchain network, enabling users to query data and submit transactions.</div>,
  },
  {
    question: "What does RPC mean in crypto?",
    answer: (
      <p className="space-y-2 leading-relaxed">
        In the context of cryptocurrency, RPC stands for Remote Procedure Call. It is a protocol that allows a program to request a service from a program located on another computer in a network, facilitating communication between different blockchain nodes.
      </p>
    ),
  },
  {
    question: "What is an RPC web3?",
    answer: (
      <p className="space-y-2 leading-relaxed">
        RPC in web3 refers to the use of remote procedure calls to interact with decentralized applications (dApps) and blockchain networks through the web3.js library, enabling functions like reading blockchain data and sending transactions.
      </p>
    ),
  },
  {
    question: "What are RPC used for?",
    answer: (
      <p className="space-y-2 leading-relaxed">
        RPCs are used to enable communication between different systems or nodes in a network, allowing them to request and execute procedures or services from each other. In blockchain, they facilitate data retrieval and transaction submission.
      </p>
    ),
  },
  {
    question: "What is an RPC endpoint?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        An RPC endpoint is a specific URL or address where an RPC server listens for requests from clients. It serves as the access point for interacting with the blockchain network via RPC calls.
      </div>
    ),
  },
];


const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
