import { useState, useEffect } from "react";
import "./App.css";

interface Vote {
  id: number;
  name: string;
  age: number;
  city: string;
  has_voted: boolean;
}


function ComponentFetch() {
  const [voters, getVoters] = useState<Vote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    voteMembers();
  }, []);

  const voteMembers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('http://localhost:4000/voters');
      if (!response.ok) throw new Error('Failed to fetch voters');
      const data = await response.json();
      getVoters(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error fetching voters');
      console.error("Error fetching voters:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Voter Registry</h1>
        <p className="subtitle">Total Voters: {voters.length}</p>
      </header>

      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading voters...</p>
        </div>
      )}

      {error && (
        <div className="error-container">
          <p>{error}</p>
          <button onClick={voteMembers} className="retry-btn">Retry</button>
        </div>
      )}

      {!loading && !error && voters.length === 0 && (
        <div className="empty-state">
          <p>No voters found</p>
        </div>
      )}

      {!loading && !error && voters.length > 0 && (
        <div className="voters-grid">
          {voters.map((voter: Vote) => (
            <div key={voter.id} className="voter-card">
              <div className="card-header">
                <h2>{voter.name}</h2>
                <span className={`voted-badge ${voter.has_voted ? 'voted' : 'not-voted'}`}>
                  {voter.has_voted ? '✓ Voted' : 'Not Voted'}
                </span>
              </div>
              <div className="card-content">
                <div className="info-item">
                  <label>Age</label>
                  <span>{voter.age}</span>
                </div>
                <div className="info-item">
                  <label>City</label>
                  <span>{voter.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default ComponentFetch;