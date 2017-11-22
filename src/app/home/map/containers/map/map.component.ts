import {Component} from '@angular/core';

@Component({
	selector: 'map',
	templateUrl: 'map.component.html'
})
export class MapComponent {
	markers = [
		{
			name: 'Holiday Inn - Ghent expo',
			lat: 51.0259671,
			lng: 3.6895503,
			center: true
		},
		{
			name: 'Ghent - St Pieters - Railway Station',
			lat: 51.036043,
			lng: 3.710872,
			center: false
		}
	];
}
