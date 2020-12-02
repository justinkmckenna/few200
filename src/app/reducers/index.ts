import { createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';

export interface AppState {
  counter: fromCounter.CounterState;
}

export const reducers = {
  counter: fromCounter.reducer
};

// Selector Functions

// 1. Create a feature selector, if you are in a feature

// 2. Create a selector for each branch of your state
const selectCounterBranch = (state: AppState) => state.counter;

// 3. Create any helpers you might need (optional)

// 4. Create selectors that your components need
export const selectCounterCount = createSelector(selectCounterBranch, b => b.count);
export const selectResetDisabled = createSelector(selectCounterBranch, b => b.count === 0 && b.byNum === 1);
export const selectCounterCountBy = createSelector(selectCounterBranch, b => b.byNum);
