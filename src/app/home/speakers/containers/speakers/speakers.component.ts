import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {takeUntil} from 'rxjs/operators/takeUntil';
import {App} from 'ionic-angular';
import {Destroy} from 'ngx-reactivetoolkit';

import {Speaker} from '../../../shared/interfaces/speaker';

// Components
import {SpeakersDetailComponent} from '../../containers/speakers-detail/speakers-detail.component';

// Services
import {SpeakersService} from '../../../shared/services/speakers/speakers.service';

@Component({
	selector: 'speakers',
	templateUrl: 'speakers.component.html'
})
export class SpeakersComponent implements OnInit, OnDestroy {
	speakers$ = this.speakersService.speakers$;
	loading$ = this.speakersService.loading$;
	@Destroy() destroy$;

	constructor(
		private speakersService: SpeakersService,
		private appCtrl: App
	) {}

	selectSpeaker(index: number) {
		this.appCtrl.getRootNav().push(SpeakersDetailComponent, {
			id: index
		});
	}

	openContactPage(url: string) {
		window.open(url, '_blank');
	}

	ngOnInit() {
		this.speakersService.loadSpeakers().pipe(
			takeUntil(this.destroy$)
		).subscribe();
	}

	ngOnDestroy() {
		// Remove in the future https://github.com/brechtbilliet/ngxReactiveToolkit/issues/1
	}
}
