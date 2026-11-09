import test from "node:test";
import assert from "node:assert/strict";
import { hexToDecimal, getNetworkFaqs } from "../libs/networkUtils.js";

const blockchain = { name: "Ink" };
const network = {
  network: "Mainnet",
  rpcUrls: ["https://example.invalid"],
  nativeCurrency: "ETH",
};

for (const [input, expected] of [
  ["57073", 57073],
  ["763373", 763373],
  ["42161", 42161],
  ["11297108109", 11297108109],
  ["0xdef1", 57073],
  ["0XDEF1", 57073],
  ["0xa4b1", 42161],
]) {
  test(`chain ID ${input} retains numeric identity`, () => {
    assert.equal(hexToDecimal(input), expected);
  });
}

test("decimal Ink FAQ agrees with the catalog and ethers result", () => {
  const faq = getNetworkFaqs(blockchain, { ...network, chainId: "57073" })
    .find(({ question }) => question.startsWith("What is the Chain ID"));
  assert.equal(faq.answer, "The Chain ID for Ink Mainnet is 57073.");
});

test("hex Ink FAQ keeps its explicit hex representation", () => {
  const faq = getNetworkFaqs(blockchain, { ...network, chainId: "0xdef1" })
    .find(({ question }) => question.startsWith("What is the Chain ID"));
  assert.equal(faq.answer, "The Chain ID for Ink Mainnet is 57073 (0xdef1 in hexadecimal).");
});

test("an empty chain ID still omits the chain-ID FAQ", () => {
  assert.equal(getNetworkFaqs(blockchain, { ...network, chainId: "" })
    .some(({ question }) => question.startsWith("What is the Chain ID")), false);
});
