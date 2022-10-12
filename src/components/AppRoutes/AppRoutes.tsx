import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { ICurrentUser } from '../../utils/interfaces';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../../data/routes';

interface AppRoutesProps {
  currentUser: ICurrentUser;
}

const AppRoutes = ({ currentUser }: AppRoutesProps) => (
  <Routes>
    {ROUTES.map(({ Component, path, redirectTo, unAuthed }) => (
      <Route
        element={
          <ProtectedRoute
            currentUser={currentUser}
            redirectTo={redirectTo}
            unAuthed={unAuthed}
          >
            <Component />
          </ProtectedRoute>
        }
        key={path}
        path={path}
      />
    ))}
    <Route element={<NotFound />} path="*" />
  </Routes>
);

export default AppRoutes;
