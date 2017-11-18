import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';

// Containers
import {SpeakersDetailComponent} from './containers/speakers-detail/speakers-detail.component';

// Components
import {SpeakerInfoComponent} from './components/speaker-info/speaker-info.component';

@NgModule({
	imports: [
		IonicModule
	],
	declarations: [
		SpeakersDetailComponent,
		SpeakerInfoComponent
	],
	entryComponents: [
		SpeakersDetailComponent
	]
})
export class SpeakersDetailModule {}
