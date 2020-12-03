import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/app.actions';

export interface ErrorState {
  message: string;
  hasError: boolean;
}

const initialState: ErrorState = {
  message: '',
  hasError: false
}

const reducerFunction = createReducer(
  initialState,
  on(actions.applicationError, (state, action) => ({ hasError: true, message: action.message })),
  on(actions.clearApplicationError, () => initialState)
);

export function reducer(state: ErrorState = initialState, action: Action): ErrorState {
  return reducerFunction(state, action);
}
