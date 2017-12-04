import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';

declare const window: any;

window.onGoogleMapInit = () => {
	window.googleMapReady = true;

	// Dispatch `gmap` event to trigger our listeners
	const event = new Event('gmap');
	window.dispatchEvent(event);
};

@Injectable()
export class GoogleMapService {
	private googleMapReady$ = new ReplaySubject(1);

	ready$ = this.googleMapReady$.asObservable();

	constructor() {
		if (window.googleMapReady) {
			this.googleMapReady$.next(true);

			return;
		}

		window.addEventListener('gmap', () => {
			this.googleMapReady$.next(true);
		}, false);
	}
}
