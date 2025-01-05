import React from 'react';

/*import { useState, useEffect, useCallback } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
//import CandidateCard from '../components/CandidateCard';
import type Candidate from '../interfaces/Candidate.interface';

const removeFromStorage= async (
  currentlyOnPotentialList: boolean | null | undefined,
  login: string | null
) => {
  if (currentlyOnPotentialList && login) {
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


const onPotentialList = useCallback(() => {
  const storedPotentialCandidates = localStorage.getItem('potentialCandidates');
  if (storedPotentialCandidates) {
    const parsedPotentialCandidates: Candidate[] = JSON.parse(storedPotentialCandidates);
    // Check if the current candidate's login is already in the list
    return parsedPotentialCandidates.some(candidate => candidate.Login === currentCandidate.Login);
  }
  return false;
}, [currentCandidate]);
*/

const SavedCandidates = () => {
  return (
    <>
      <h1>Potential Candidates</h1>
    </>
  );
};

export default SavedCandidates;
