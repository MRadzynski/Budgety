import { ICurrentUser } from '../../utils/interfaces';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: JSX.Element;
  currentUser: ICurrentUser;
  redirectTo: string;
  unAuthed?: boolean;
}

const ProtectedRoute = ({
  children,
  currentUser,
  redirectTo,
  unAuthed
}: ProtectedRouteProps) => {
  if (unAuthed) return !currentUser ? children : <Navigate to={redirectTo} />;

  return currentUser ? children : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
