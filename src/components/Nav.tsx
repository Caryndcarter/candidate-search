import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const currentPage = useLocation().pathname;

  // TODO: Add necessary code to display the navigation bar and link between the pages (none of this was here, not the import statement or anything after return)
  return (
    <nav>
    <h1>
      <Link to='/' id='logo'>
        Candidate Search
      </Link>
    </h1>
    <ul className='nav nav-tabs'>
      <li className='nav-item'>
        <h2>
          <Link
            to='/'
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            HOME
          </Link>
        </h2>
      </li>
      <li className='nav-item'>
        <h2>
          <Link
            to='/search'
            className={
              currentPage === '/search' ? 'nav-link active' : 'nav-link'
            }
          >
            SEARCH FOR CANDIDATES
          </Link>
        </h2>
      </li>
      <li className='nav-item'>
        <h2>
          <Link
            to='/saved'
            className={
              currentPage === '/saved' ? 'nav-link active' : 'nav-link'
            }
          >
            SAVED CANDIDATES
          </Link>
        </h2>
      </li>
    </ul>
  </nav>
  );

};

export default Nav;
