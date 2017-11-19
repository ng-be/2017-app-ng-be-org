import {NgModule, Component} from '@angular/core';
import {IonicModule} from 'ionic-angular';

// Feature modules
import {ScheduleModule} from './schedule/schedule.module';
import {SpeakersModule} from './speakers/speakers.module';

// Shared module
import {SharedModule} from './shared/shared.module';

// Components
import {HomeComponent} from './home.component';

@NgModule({
	imports: [
		IonicModule,
		ScheduleModule,
		SpeakersModule,
		SharedModule
	],
	declarations: [
		HomeComponent
	],
	exports: [
		HomeComponent
	],
	entryComponents: [
		HomeComponent
	]
})
export class HomeModule {}
