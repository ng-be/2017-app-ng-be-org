import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

import {Speaker} from '../../../shared/interfaces/speaker';

@Component({
	selector: 'speaker-info',
	template: `
		<div class="speaker-info">
			<div
				class="speaker-info__header"
				[style.backgroundImage]="'url(' + speaker.picture + ')'">

				<h3>{{ speaker.title }}</h3>
			</div>

			<p class="speaker-info__description">
				{{ speaker.description }}
			</p>
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakerInfoComponent {
	@Input() speaker: Speaker;
}
