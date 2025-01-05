import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from '../components/CandidateCard';
import type Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    Image: '',
    Name: '',
    Login: '',
    Email: '',
    Location: '',
    Company: '',
    Bio: '',
  });


   const fetchCandidateData = useCallback(async () => {
    try {
      // Fetch a random candidate
      const candidates = await searchGithub();
      if (candidates && candidates.length > 0) {
        const randomCandidate = candidates[0];

        // Fetch candidate details based on the login
        const candidateDetails = await searchGithubUser(randomCandidate.login);
        console.log('Fetched candidate details:', candidateDetails); 
        if (candidateDetails) {
          setCurrentCandidate({
            Image: candidateDetails.avatar_url || 'default-avatar.png', 
            Name: candidateDetails.name || 'No Name Provided', 
            Login: candidateDetails.login || 'Unknown Login', 
            Email: candidateDetails.email || 'N/A', 
            Location: candidateDetails.location || 'Location not available', 
            Company: candidateDetails.company || 'Company not specified', 
            Bio: candidateDetails.bio || 'No bio available', 
          });
          
        } else {
          console.log('No candidate details found');
          fetchCandidateData(); 
        }
      }
    } catch (error) {
      console.error('Error fetching candidate:', error);
      fetchCandidateData(); 
    }
  }, []); // empty dependency array ensures it's stable across renders

  // Trigger candidate data fetch when the component is mounted
  useEffect(() => {
    fetchCandidateData();
  }, [fetchCandidateData]);




// Add candidate to potential list and fetch new candidate
const addToPotentialList = useCallback(async () => {
  let parsedPotentialCandidates: Candidate[] = [];
  const storedPotentialCandidates = localStorage.getItem('potentialCandidates');
  if (storedPotentialCandidates) {
    parsedPotentialCandidates = JSON.parse(storedPotentialCandidates);
  }

  // Add the current candidate to the list
  parsedPotentialCandidates.push(currentCandidate);
  localStorage.setItem('potentialCandidates', JSON.stringify(parsedPotentialCandidates));

  // Fetch a new random candidate after storing the current one
  await fetchCandidateData(); 
}, [currentCandidate, fetchCandidateData]);

  return (
    <>
      <h1>Candidate Search</h1>
      <CandidateCard
        currentCandidate={currentCandidate}
        addToPotentialList={addToPotentialList}
        //onPotentialList={onPotentialList()}
        //removeFromStorage={removeFromStorage}
      />
    </>
  );
};

export default CandidateSearch;



/*
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

  // Fetch a new candidate after removing the current one
  await fetchCandidateData();
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