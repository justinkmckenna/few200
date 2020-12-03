import { createAction, props } from '@ngrx/store';
import { GiftCreate, GiftItem } from '../models';
import { GiftIdeaEntity } from '../reducers/gift-ideas.reducer';

let fakeId = 1;

// Gift Added
export const giftAdded = createAction(
  '[gift-giving gifts] gift added',
  ({ gift }: { gift: GiftCreate }) => ({
    payload: {
      ...gift,
      id: 'T' + fakeId++
    } as GiftIdeaEntity
  })
);
export const giftAddedSuccess = createAction(
  '[gift-giving gifts] gift added success',
  props<{oldId: string, payload: GiftIdeaEntity}>()
);
export const giftAddedFailure = createAction(
  '[gift-giving gifts] gift added failure',
  props<{payload: GiftIdeaEntity, message: string}>()
);

// Load Gift Data
export const loadGiftData = createAction(
  '[gift-giving gifts] load gift data'
);
export const loadGiftDataSuccess = createAction(
  '[gift-giving gifts] load gift data success',
  props<{payload: GiftIdeaEntity[]}>()
);
export const loadGiftDataFailure = createAction(
  '[gift-giving gifts] load gift data failure',
  props<{error: string}>()
);
