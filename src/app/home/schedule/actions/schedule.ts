import {Action} from '@ngrx/store';

import {ScheduleItem} from '../interfaces/schedule-item';

export const SET_SCHEDULE = '[Schedule] Set Schedule';

export class SetSchedule implements Action {
	readonly type = SET_SCHEDULE;

	constructor(
		public payload: ScheduleItem[]
	) {}
}

export type Actions = SetSchedule;
