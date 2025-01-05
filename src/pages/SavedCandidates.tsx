import React from 'react';
import { useState, useEffect } from 'react';
import PotentialCandidate from '../components/PotentialCandidate';
import type Candidate from '../interfaces/Candidate.interface';


const removeFromStorage =  (
  login: string | null, 
  setCandidates: React.Dispatch<React.SetStateAction<Candidate[]>>
) => {
  if (login) {
    const storedPotentialCandidates = localStorage.getItem('potentialCandidates');
    if (storedPotentialCandidates) {
      const parsedPotentialCandidates: Candidate[] = JSON.parse(storedPotentialCandidates);
      const updatedCandidates = parsedPotentialCandidates.filter(
        (candidate) => candidate.Login !== login
      );
      localStorage.setItem('potentialCandidates', JSON.stringify(updatedCandidates));

 // Update the state to trigger a re-render with the new list of candidates
      setCandidates(updatedCandidates);

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


  const handleRemoveFromStorage = (login: string | null) => {
    removeFromStorage(login, setCandidates);
  };

  return (
    <>
      <h1>Potential Candidates</h1>
      {candidates.length === 0 ? (
        <h2>No currently saved candidates.</h2> 
      ) : (
        <div className="candidate-list">
          {candidates.map((candidate) => (
            <PotentialCandidate
              key={candidate.Login}
              potentialCandidate={candidate}
              removeFromStorage={handleRemoveFromStorage}
            />
          ))}
        </div>
      )}
    </>
  );
};


export default SavedCandidates;
