import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';

import {SpeakersService} from '../../../shared/services/speakers/speakers.service';

@Component({
	selector: 'speakers-detail',
	templateUrl: 'speakers-detail.component.html'
})
export class SpeakersDetailComponent {
	speaker$ = this.speakersService.getSpeaker(this.navParams.get('id'));

	constructor(
		private speakersService: SpeakersService,
		private navParams: NavParams
	) {}
}
