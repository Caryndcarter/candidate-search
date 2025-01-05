import React from 'react';
import { useState, useEffect } from 'react';
import PotentialCandidate from '../components/PotentialCandidate';
import type Candidate from '../interfaces/Candidate.interface';


const removeFromStorage= async (
  login: string | null, 
  
) => {
  if (login) {
    const storedPotentialCandidates = localStorage.getItem('potentialCandidates');
    if (storedPotentialCandidates) {
      const parsedPotentialCandidates: Candidate[] = JSON.parse(storedPotentialCandidates);
      const updatedCandidates = parsedPotentialCandidates.filter(
        (candidate) => candidate.Login !== login
      );
      localStorage.setItem('potentialCandidates', JSON.stringify(updatedCandidates));

      console.log('Removed from potential list:', login);
    }
  }
};

const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const storedPotentialCandidates = localStorage.getItem('potentialCandidates');
    if (storedPotentialCandidates) {
      const parsedPotentialCandidates: Candidate[] = JSON.parse(storedPotentialCandidates);
      setCandidates(parsedPotentialCandidates);
    }
  }, []);

  return (
    <>
      <h1>Potential Candidates</h1>
      <div className="candidate-list">
        {candidates.map((candidate) => (
          <PotentialCandidate
            key={candidate.Login}
            potentialCandidate={candidate}
            removeFromStorage={removeFromStorage}
          />
        ))}
      </div>
    </>
  );
};


export default SavedCandidates;
