import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Speaker} from '../../../shared/interfaces/speaker';

@Component({
	selector: 'speaker',
	templateUrl: 'speaker.component.html'
})
export class SpeakerComponent {
	@Input() speaker: Speaker;
	@Output() contact = new EventEmitter<string>();

	onContact(type: 'twitter' | 'website') {
		if (type === 'twitter') {
			this.contact.emit(`https://twitter.com/${this.speaker.contact.twitter}`);
		} else if (type === 'website') {
			this.contact.emit(this.speaker.contact.website.url);
		}
	}
}
