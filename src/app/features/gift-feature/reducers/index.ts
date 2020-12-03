import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import { GiftItem } from '../models';
import * as fromGiftIdeas from './gift-ideas.reducer';

export const featureName = 'giftFeature';

export interface GiftFeatureState {
  giftIdeas: fromGiftIdeas.GiftIdeaState;
}

export const reducers: ActionReducerMap<GiftFeatureState> = {
  giftIdeas: fromGiftIdeas.reducer
}

// 1. Feature reducer
const selectGiftFeature = createFeatureSelector<GiftFeatureState>(featureName);

// 2. one per branch of state
const selectGiftIdeasBranch = createSelector(
  selectGiftFeature,
  f => f.giftIdeas
);

// 3. helpers (optional)
const {selectAll: selectAllGifts} = fromGiftIdeas.adapter.getSelectors(selectGiftIdeasBranch);

// 4. what components need
// todo: ./models/giftitem[]
export const selectGiftItems = createSelector(
  selectAllGifts,
  (items) => items.map(item => {
    return {
      ...item,
      isTemp: item.id.toString().startsWith('T')
    };
  }) as GiftItem[]
);
