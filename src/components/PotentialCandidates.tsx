import type Candidate from '../interfaces/Candidate.interface';
import CandidateCard from './CandidateCard';

interface PotentialCandidatesProps {
  potentialCandidates: Candidate[];
  removeFromStorage:
    | ((
        currentlyOnPotnentialList: boolean | null | undefined,
        login: string | null
      ) => void)
    | null;
}

const PotentialCandidatesList = ({
  potentialCandidates,
  removeFromStorage,
}: PotentialCandidatesProps) => {
  console.log(potentialCandidates);

  return (
    <>
      <ul>
        {potentialCandidates.map((candidate) => (
          <CandidateCard
            currentCandidate={candidate}
            key={candidate.Login}
            onPotentialList={true}
            removeFromStorage={removeFromStorage}
          />
        ))}
      </ul>
    </>
  );
};

export default PotentialCandidatesList;
