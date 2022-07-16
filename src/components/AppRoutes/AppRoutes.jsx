import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../../data/routes';

const AppRoutes = ({ currentUser }) => (
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
        exact
        key={path}
        path={path}
      />
    ))}
    <Route element={<NotFound />} path="*" />
  </Routes>
);

export default AppRoutes;
