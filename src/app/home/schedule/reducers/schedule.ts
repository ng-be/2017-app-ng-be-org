import * as schedule from '../actions/schedule';
import {ScheduleItem} from '../interfaces/schedule-item';

export type State = ScheduleItem[];
export const initialState: State = undefined;

export function reducer(state = initialState, action: schedule.Actions): State {
	switch (action.type) {
		case schedule.SET_SCHEDULE:
			return action.payload;
		default:
			return state;
	}
}

export const getTypes = (state: State) => state;
