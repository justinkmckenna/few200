import { Action, createReducer, on } from '@ngrx/store';
import * as counterActions from '../actions/counter.actions';

export interface CounterState {
  count: number;
  byNum: number;
}

export const initialState: CounterState = {
  count: 0,
  byNum: 1
};

const reducerFunction = createReducer(
  initialState,
  on(counterActions.reset, () => initialState),
  on(counterActions.increment, (state) => ({ ...state, count: state.count + state.byNum })),
  on(counterActions.decrement, (state) => ({ ...state, count: state.count - state.byNum })),
  on(counterActions.countBy, (state, action) => ({ ...state, byNum: action.num })),
);

export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return reducerFunction(state, action);
}
