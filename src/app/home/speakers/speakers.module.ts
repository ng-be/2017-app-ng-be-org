import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';

import {SpeakersComponent} from './containers/speakers/speakers.component';

@NgModule({
	imports: [
		IonicModule
	],
	declarations: [
		SpeakersComponent
	],
	entryComponents: [
		SpeakersComponent
	]
})
export class SpeakersModule {}
