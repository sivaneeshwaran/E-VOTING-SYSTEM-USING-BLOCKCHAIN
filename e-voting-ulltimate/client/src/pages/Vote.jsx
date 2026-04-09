import { useState } from "react";
import { castVote } from "../services/blockchain";

export default function Vote() {
  const [loading, setLoading] = useState(false);
  const [txHash, setTxHash] = useState("");

  const handleVote = async (id) => {
    try {
      setLoading(true);

      const hash = await castVote(id);

      setTxHash(hash);
      alert("✅ Vote recorded!\nTx Hash: " + hash);

    } catch (err) {
      console.error(err);
      alert("❌ Transaction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>🗳️ Cast Your Vote</h1>

      {loading && <p>⏳ Submitting vote to blockchain...</p>}

      <button onClick={() => handleVote(1)}>
        Vote Candidate A
      </button>

      <button onClick={() => handleVote(2)}>
        Vote Candidate B
      </button>

      {txHash && (
        <p>
          🔗 Tx Hash: <br />
          <small>{txHash}</small>
        </p>
      )}
    </div>
  );
}