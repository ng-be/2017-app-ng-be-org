import {Component} from '@angular/core';

import {ScheduleComponent} from './schedule/index';
import {SpeakersComponent} from './speakers/index';

@Component({
	template: `
		<ion-tabs>
			<ion-tab
				[root]="tab1Root"
				tabTitle="Schedule"
				tabIcon="home">
			</ion-tab>

			<ion-tab
				[root]="tab2Root"
				tabTitle="Speakers"
				tabIcon="people">
			</ion-tab>
		</ion-tabs>
	`
})
export class HomeComponent {
	tab1Root = ScheduleComponent;
	tab2Root = SpeakersComponent;
}
