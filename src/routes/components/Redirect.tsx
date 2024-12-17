import { Navigate } from 'react-router';

import { DEFAULT_PATHNAME } from '../constants';

const Redirect = () => {
  return <Navigate to={DEFAULT_PATHNAME} replace />;
};

export default Redirect;
