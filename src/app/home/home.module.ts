import {NgModule, Component} from '@angular/core';
import {IonicModule} from 'ionic-angular';

// Feature modules
import {ScheduleModule} from './schedule/schedule.module';
import {SpeakersModule} from './speakers/speakers.module';

// Components
import {HomeComponent} from './home.component';

@NgModule({
	imports: [
		IonicModule,
		ScheduleModule,
		SpeakersModule
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
