import * as speakers from '../actions/speakers';
import {Speaker} from '../interfaces/speaker';

export type State = Speaker[];
export const initialState: State = undefined;

export function reducer(state = initialState, action: speakers.Actions): State {
	switch (action.type) {
		case speakers.SET_SPEAKERS:
			return action.payload;
		default:
			return state;
	}
}

export const getTypes = (state: State) => state;
