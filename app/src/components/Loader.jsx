import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div className="loader">
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="success" />
    </div>
  )
}

export default Loader