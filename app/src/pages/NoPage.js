import { Link } from 'react-router-dom';

const NoPage = ({error}) => {
    return (
        <div className="no-page">
          <div className="no-page__inner">
           <h1 className='no-page__error'>{error} <span> &#9888;</span></h1>
            <div className='no-page__btn'>
              <Link to="/">&#8592; Головна</Link>
            </div>
           </div>
        </div>
    );
};

export default NoPage;