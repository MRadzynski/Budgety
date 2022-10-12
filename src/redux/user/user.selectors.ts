import { createSelector } from 'reselect';

const selectUser = (state: any) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user?.currentUser
);

export const selectCreatedAt = createSelector(
  [selectCurrentUser],
  currentUser => currentUser?.createdAt
);

export const selectDisplayName = createSelector(
  [selectCurrentUser],
  currentUser => currentUser?.displayName
);
