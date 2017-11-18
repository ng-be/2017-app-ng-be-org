import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Speaker} from '../../../shared/interfaces/speaker';

@Component({
	selector: 'speaker',
	templateUrl: 'speaker.component.html'
})
export class SpeakerComponent {
	@Input() speaker: Speaker;
	@Output() select = new EventEmitter<Speaker>();
	@Output() contact = new EventEmitter<string>();

	onSelect(event: Event) {
		this.select.emit(this.speaker);
	}

	onContact(type: 'twitter' | 'website', event: Event) {
		if (type === 'twitter') {
			this.contact.emit(`https://twitter.com/${this.speaker.contact.twitter}`);
		} else if (type === 'website') {
			this.contact.emit(this.speaker.contact.website.url);
		}

		event.stopPropagation();
	}
}
