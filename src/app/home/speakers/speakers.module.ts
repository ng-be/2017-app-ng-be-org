import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from 'ionic-angular';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {SharedModule} from '../shared/shared.module';

// Containers
import {SpeakersComponent} from './containers/speakers/speakers.component';
import {SpeakersDetailComponent} from './containers/speakers-detail/speakers-detail.component';

// Components
import {SpeakerComponent} from './components/speaker/speaker.component';
import {SpeakerInfoComponent} from './components/speaker-info/speaker-info.component';
import {SpeakerSocialRowComponent} from './components/speaker-social-row/speaker-social-row.component';

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		AngularFireDatabaseModule,
		SharedModule
	],
	declarations: [
		SpeakersComponent,
		SpeakersDetailComponent,
		SpeakerComponent,
		SpeakerInfoComponent,
		SpeakerSocialRowComponent
	],
	entryComponents: [
		SpeakersComponent,
		SpeakersDetailComponent
	]
})
export class SpeakersModule {}
