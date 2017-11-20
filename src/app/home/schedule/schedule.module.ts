import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {StoreModule} from '@ngrx/store';

// Containers
import {ScheduleComponent} from './containers/schedule/schedule.component';

// Components
import {ScheduleItemComponent} from './components/schedule-item/schedule-item.component';

// Services
import {ScheduleService} from './services/schedule/schedule.service';

import {reducers} from './reducers/index';

@NgModule({
	imports: [
		IonicModule,
		StoreModule.forFeature('schedule', reducers),
	],
	declarations: [
		ScheduleComponent,
		ScheduleItemComponent
	],
	providers: [
		ScheduleService
	],
	entryComponents: [
		ScheduleComponent
	]
})
export class ScheduleModule {}
