import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, currentUser, redirectTo, unAuthed }) => {
  if (unAuthed) return !currentUser ? children : <Navigate to={redirectTo} />;

  return currentUser ? children : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
