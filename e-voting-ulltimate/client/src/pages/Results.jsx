import { useEffect, useState } from "react";
import { getResults } from "../services/blockchain";

export default function Results() {
  const [data, setData] = useState({ A: 0, B: 0 });
  const [loading, setLoading] = useState(true);

  const loadResults = async () => {
    try {
      const res = await getResults();
      setData(res);
    } catch (err) {
      console.error(err);
      alert("Error fetching results");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadResults();
  }, []);

  return (
    <div className="container">
      <h2>📊 Election Results</h2>

      {loading ? (
        <p>⏳ Loading from blockchain...</p>
      ) : (
        <>
          <p>Candidate A: {data.A}</p>
          <p>Candidate B: {data.B}</p>

          <button onClick={loadResults}>🔄 Refresh</button>
        </>
      )}
    </div>
  );
}