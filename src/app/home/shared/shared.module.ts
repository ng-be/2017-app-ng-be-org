import {NgModule} from '@angular/core';

import {SpeakersService} from './services/speakers/speakers.service';

import {reducers} from './reducers/index';
import {StoreModule} from '@ngrx/store';

@NgModule({
	imports: [
		StoreModule.forFeature('home', reducers),
	],
	providers: [
		SpeakersService
	]
})
export class SharedModule {}
