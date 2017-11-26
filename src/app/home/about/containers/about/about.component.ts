import {Component} from '@angular/core';
import {PopoverController} from 'ionic-angular';

// Components
import {PopoverComponent} from '../../components/popover/popover.component';

@Component({
	selector: 'about',
	templateUrl: 'about.component.html'
})
export class AboutComponent {
	constructor(
		private popoverCtrl: PopoverController
	) {}

	presentPopover(event: Event) {
		const popover = this.popoverCtrl.create(PopoverComponent);
		popover.present({
			ev: event
		});

		popover.onWillDismiss(url => {
			if (url) {
				window.open(url, '__system');
			}
		});
	}
}
