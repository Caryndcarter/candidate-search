import type Candidate from '../interfaces/Candidate.interface';

interface PotentialCandidateProps {
  potentialCandidate: Candidate;
  removeFromStorage: (login: string | null) => void; 
}

const PotentialCandidate = ({
  potentialCandidate,
  removeFromStorage,
}: PotentialCandidateProps) => {
  console.log(potentialCandidate);

  return (
    <div className="candidate-row">
      <div className="candidate-column">
        <strong>Image:</strong>
        <img
          src={`${potentialCandidate.Image}`}
          alt={`${potentialCandidate.Name}`}
          className='candidate-image'
          />
      </div>
      <div className="candidate-column">
        <strong>Name:</strong>
        <p>{potentialCandidate.Name || 'No Name Provided'}</p>
      </div>
      <div className="candidate-column">
        <strong>Login:</strong>
        <p>{potentialCandidate.Login || 'Unknown Login'}</p>
      </div>
      <div className="candidate-column">
        <strong>Email:</strong>
        <p>{potentialCandidate.Email || 'N/A'}</p>
      </div>
      <div className="candidate-column">
        <strong>Location:</strong>
        <p>{potentialCandidate.Location || 'Location not available'}</p>
      </div>
      <div className="candidate-column">
        <strong>Company:</strong>
        <p>{potentialCandidate.Company || 'Company not specified'}</p>
      </div>
      <div className="candidate-column">
        <strong>Bio:</strong>
        <p>{potentialCandidate.Bio || 'No bio available'}</p>
      </div>
       <div className="candidate-column remove-column">
        <strong>Remove:</strong>
        <div
          className="remove-icon-wrapper"
          onClick={() => removeFromStorage(potentialCandidate.Login)}
        >
          <span className="minus-sign">-</span>
        </div>
      </div>
    </div>
  );
};


export default PotentialCandidate;
    



/*
type CandidateCardProps = {
  currentCandidate: Candidate;
  addToPotentialList?: (() => void) | null;
  onPotentialList?: boolean | null;
  removeFromStorage?:
    | ((
        currentlyOnPotentialList: boolean | null | undefined,
        login: string | null
      ) => void)
    | null;
};

const CandidateCard = ({
  currentCandidate,
  addToPotentialList,
  onPotentialList,
  removeFromStorage,
}: CandidateCardProps) => {
*/

/*
 {onPotentialList ? (
              <ImCross
                className='remove-icon'
                onClick={() => removeFromStorage?.(onPotentialList, currentCandidate.Login)}
              />
            ) : (
              <CgPlayListAdd
                className='add-icon'
                onClick={() => addToPotentialList?.()}
              />
            )}
*/