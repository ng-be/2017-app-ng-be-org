import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

import * as speakers from './speakers';

export interface State {
	speakers: speakers.State;
}

// Reducer
export const reducers: ActionReducerMap<State> = {
	speakers: speakers.reducer
};

// Feature Selectors
const selectSpeakersState = createFeatureSelector<State>('speakers');

export const getSpeakers = createSelector(selectSpeakersState, (state: State) => state.speakers);
