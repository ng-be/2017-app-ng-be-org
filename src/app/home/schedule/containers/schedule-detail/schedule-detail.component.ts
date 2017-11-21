import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';

import {ScheduleService} from '../../services/schedule/schedule.service';

import {ScheduleItem} from '../../interfaces/schedule-item';

@Component({
	selector: 'schedule-detail',
	templateUrl: 'schedule-detail.component.html'
})
export class ScheduleDetailComponent {
	item$ = this.scheduleService.getItem(this.navParams.get('id'));

	constructor(
		private scheduleService: ScheduleService,
		private navParams: NavParams
	) {}

	getTitle(item: ScheduleItem) {
		return item.type;
	}
}
