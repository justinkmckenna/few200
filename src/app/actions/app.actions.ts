import { createAction, props } from '@ngrx/store';

export const applicationStart = createAction(
  '[app] APPLICATION_STARTED'
);

export const applicationError = createAction(
  '[app] application error',
  props<{feature: string, message: string}>()
);

export const clearApplicationError = createAction(
  '[app] clear application error'
);
