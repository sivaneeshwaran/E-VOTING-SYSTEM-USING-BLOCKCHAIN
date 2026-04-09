import { ethers } from "ethers";

// 👉 Replace with your deployed contract address
const contractAddress = "YOUR_CONTRACT_ADDRESS";

// 👉 Minimal ABI (only required functions)
const abi = [
  "function vote(uint candidateId)",
  "function getVotes(uint candidateId) view returns (uint)"
];

// 🔌 Connect MetaMask
export async function connectWallet() {
  if (!window.ethereum) {
    alert("Please install MetaMask!");
    return null;
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = await provider.getSigner();

  return signer;
}

// 🗳️ Cast Vote
export async function castVote(candidateId) {
  const signer = await connectWallet();
  if (!signer) return;

  const contract = new ethers.Contract(contractAddress, abi, signer);

  const tx = await contract.vote(candidateId);

  console.log("Transaction sent:", tx.hash);

  await tx.wait(); // wait for confirmation

  return tx.hash;
}

// 📊 Get Results
export async function getResults() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const contract = new ethers.Contract(contractAddress, abi, provider);

  const votesA = await contract.getVotes(1);
  const votesB = await contract.getVotes(2);

  return {
    A: Number(votesA),
    B: Number(votesB)
  };
}