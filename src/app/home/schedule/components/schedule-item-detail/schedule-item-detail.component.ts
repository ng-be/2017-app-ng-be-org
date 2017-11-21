import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

import {ScheduleItem} from '../../interfaces/schedule-item';

@Component({
	selector: 'schedule-item-detail',
	template: `
		<h1>{{ item.title }}</h1>

		<p>{{ item | json }}</p>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleItemDetailComponent {
	@Input() item: ScheduleItem;
}
