import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';

import {ScheduleComponent} from './containers/schedule/schedule.component';

@NgModule({
	imports: [
		IonicModule
	],
	declarations: [
		ScheduleComponent
	],
	entryComponents: [
		ScheduleComponent
	]
})
export class ScheduleModule {}
