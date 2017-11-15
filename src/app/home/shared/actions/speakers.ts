import {Action} from '@ngrx/store';

import {Speaker} from '../interfaces/speaker';

export const SET_SPEAKERS = '[Speakers] Set Speakers';

export class SetSpeakers implements Action {
	readonly type = SET_SPEAKERS;

	constructor(
		public payload: Speaker[]
	) {}
}

export type Actions = SetSpeakers;
