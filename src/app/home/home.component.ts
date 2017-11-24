import {Component, OnInit} from '@angular/core';

import {ScheduleComponent} from './schedule/index';
import {SpeakersComponent} from './speakers/index';
import {MapComponent} from './map';
import {SpeakersService} from './shared/services/speakers/speakers.service';

@Component({
	template: `
		<ion-tabs>
			<ion-tab
				[root]="tab1Root"
				tabTitle="Schedule"
				tabIcon="calendar">
			</ion-tab>

			<ion-tab
				[root]="tab2Root"
				tabTitle="Speakers"
				tabIcon="people">
			</ion-tab>

			<ion-tab
				[root]="tab3Root"
				tabTitle="Map"
				tabIcon="map">
			</ion-tab>
		</ion-tabs>
	`
})
export class HomeComponent implements OnInit {
	tab1Root = ScheduleComponent;
	tab2Root = SpeakersComponent;
	tab3Root = MapComponent;

	constructor(
		private speakersService: SpeakersService
	) {}

	ngOnInit() {
		this.speakersService.loadSpeakers().subscribe();
	}
}
