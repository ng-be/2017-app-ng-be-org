import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

import {ScheduleItem} from '../../interfaces/schedule-item';

@Component({
	selector: 'schedule-item',
	template: `
		<div class="schedule-item">
			<div
				class="schedule-item__hour">
				{{ item.startDate | date:'HH:mm' }}
			</div>

			<div
				class="schedule-item__item {{ item.type }}"
				[class.short]="!item.speaker">
				<h3>{{ item.title }}</h3>

				<div
					class="schedule-item__speakers"
					*ngIf="item.speaker">
					<div
						class="schedule-item__speaker"
						*ngFor="let speaker of speakers">
						<img [src]="speaker.picture" alt="{{ speaker.firstName }} {{ speaker.name }}">
						<span>{{ speaker.firstName }}<br />{{ speaker.name }}</span>
					</div>
				</div>
			</div>
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleItemComponent {
	@Input() item: ScheduleItem;

	get speakers() {
		return Array.isArray(this.item.speaker) ? this.item.speaker : [this.item.speaker];
	}
}
