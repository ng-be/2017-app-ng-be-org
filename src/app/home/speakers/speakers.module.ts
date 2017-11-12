import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {IonicModule} from 'ionic-angular';
import {AngularFireDatabaseModule} from 'angularfire2/database';

// Components
import {SpeakersComponent} from './containers/speakers/speakers.component';
import {SpeakerComponent} from './components/speaker/speaker.component';

// Services
import {SpeakersService} from './services/speakers/speakers.service';

// State
import {reducers} from './reducers/index';

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		StoreModule.forFeature('speakers', reducers),
		AngularFireDatabaseModule
	],
	declarations: [
		SpeakersComponent,
		SpeakerComponent
	],
	entryComponents: [
		SpeakersComponent
	],
	providers: [
		SpeakersService
	]
})
export class SpeakersModule {}
