import type Candidate from '../interfaces/Candidate.interface';
import { ImCross } from 'react-icons/im';
import { CgPlayListAdd } from 'react-icons/cg';

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

    
    return (
      <>
        {currentCandidate?.Login ? (
          <section className='candidateCard'>
          <figure className='image-container'>
            <img src={`${currentCandidate.Image}`} alt={`${currentCandidate.Name}`} className='candidate-image' />
          </figure>
          <article className='details'>
          <h2 className='candidate-name'>{currentCandidate.Name || 'No Name Provided'}</h2>
            <p><strong>Login:</strong> {currentCandidate.Login|| 'Unknown Login'}</p>
            <p><strong>Location:</strong> {currentCandidate.Location || 'Location not available'}</p>
            <p><strong>Email:</strong> {currentCandidate.Email || 'N/A'}</p>
            <p><strong>Company:</strong> {currentCandidate.Company || 'Company not specified'}</p>
            <p><strong>Bio:</strong> {currentCandidate.Bio || 'No bio available'}</p>
          </article>
          <aside className='icons'>
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
          </aside>
          </section>
        ) : (
          <h1 style={{ margin: '16px 0' }}>Please search for a candidate.</h1>
        )}
      </>
    );
  };
  
  export default CandidateCard;