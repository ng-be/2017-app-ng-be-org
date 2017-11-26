import {Component, OnInit} from '@angular/core';

// Component
import {ScheduleComponent} from './schedule';
import {SpeakersComponent} from './speakers';
import {MapComponent} from './map';
import {AboutComponent} from './about';

// Services
import {SpeakersService} from './shared/services/speakers/speakers.service';

@Component({
	template: `
		<ion-tabs>
			<ion-tab
				[root]="schedule"
				tabTitle="Schedule"
				tabIcon="calendar">
			</ion-tab>

			<ion-tab
				[root]="speakers"
				tabTitle="Speakers"
				tabIcon="people">
			</ion-tab>

			<ion-tab
				[root]="map"
				tabTitle="Map"
				tabIcon="map">
			</ion-tab>

			<ion-tab
				[root]="about"
				tabTitle="About"
				tabIcon="information-circle">
			</ion-tab>
		</ion-tabs>
	`
})
export class HomeComponent implements OnInit {
	schedule = ScheduleComponent;
	speakers = SpeakersComponent;
	map = MapComponent;
	about = AboutComponent;

	constructor(
		private speakersService: SpeakersService
	) {}

	ngOnInit() {
		this.speakersService.loadSpeakers().subscribe();
	}
}
