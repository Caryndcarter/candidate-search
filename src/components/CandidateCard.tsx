import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
import { ImCross } from 'react-icons/im';
import { CgPlayListAdd } from 'react-icons/cg';

type CandidateCardProps = {
    currentCandidate: Candidate;
    addToPotentialList?: (() => void) | null;
    onPotentialList?: boolean | null;
    removeFromStorage?:
      | ((
          e: React.MouseEvent<SVGSVGElement, MouseEvent>,
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
        {currentCandidate?.Name ? (
          <section className='candidateCard'>
          <figure className='image-container'>
            <img src={`${currentCandidate.Image}`} alt={`${currentCandidate.Name}`} className='candidate-image' />
          </figure>
          <article className='details'>
            <h2 className='candidate-name'>{currentCandidate.Name}</h2>
            <p className='candidate-login'>({currentCandidate.Login})</p>
            <p><strong>Location:</strong> {currentCandidate.Location}</p>
            <p><strong>Email:</strong> {currentCandidate.Email}</p>
            <p><strong>Company:</strong> {currentCandidate.Company}</p>
            <p><strong>Bio:</strong> {currentCandidate.Bio}</p>
          </article>
          <aside className='icons'>
            {onPotentialList ? (
              <ImCross
                className='remove-icon'
                onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) =>
                  removeFromStorage?.(
                    e,
                    onPotentialList,
                    currentCandidate.Name
                  )
                }
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