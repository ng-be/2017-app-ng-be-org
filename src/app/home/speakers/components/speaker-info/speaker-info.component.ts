import {Component, ChangeDetectionStrategy, Input, EventEmitter, Output} from '@angular/core';

import {Speaker} from '../../../shared/interfaces/speaker';

@Component({
	selector: 'speaker-info',
	templateUrl: 'speaker-info.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakerInfoComponent {
	@Input() speaker: Speaker;
	@Output() contact = new EventEmitter<string>();

	openContact(url: string) {
		this.contact.emit(url);
	}
}
