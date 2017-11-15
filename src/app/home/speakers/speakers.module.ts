import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from 'ionic-angular';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {SharedModule} from '../shared/shared.module';

// Components
import {SpeakersComponent} from './containers/speakers/speakers.component';
import {SpeakerComponent} from './components/speaker/speaker.component';

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		AngularFireDatabaseModule,
		SharedModule
	],
	declarations: [
		SpeakersComponent,
		SpeakerComponent
	],
	entryComponents: [
		SpeakersComponent
	]
})
export class SpeakersModule {}
