import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

import * as schedule from './schedule';

export interface State {
	schedule: schedule.State;
}

// Reducer
export const reducers: ActionReducerMap<State> = {
	schedule: schedule.reducer
};

// Feature Selectors
const selectScheduleState = createFeatureSelector<State>('schedule');

export const getSchedule = createSelector(selectScheduleState, (state: State) => state.schedule);
