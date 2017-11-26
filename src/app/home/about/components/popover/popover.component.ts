import {Component, ChangeDetectionStrategy} from '@angular/core';
import {ViewController} from 'ionic-angular';

@Component({
	selector: 'about-popover',
	template: `
		<ion-list class="popover">
			<button ion-item (click)="select('https://ng-be.org/code-of-conduct')">Code Of Conduct</button>
			<button ion-item (click)="select('https://ng-be.org')">Website</button>
			<button ion-item (click)="select('https://github.com/ng-be')">Github</button>
		</ion-list>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopoverComponent {
	constructor(
		private viewCtrl: ViewController
	) {}

	select(url) {
		this.viewCtrl.dismiss(url);
	}

	close() {
		this.viewCtrl.dismiss();
	}
}
