import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {StoreModule} from '@ngrx/store';

// Containers
import {ScheduleComponent} from './containers/schedule/schedule.component';
import {ScheduleDetailComponent} from './containers/schedule-detail/schedule-detail.component';

// Components
import {ScheduleItemComponent} from './components/schedule-item/schedule-item.component';
import {ScheduleItemDetailComponent} from './components/schedule-item-detail/schedule-item-detail.component';

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
		ScheduleDetailComponent,
		ScheduleItemComponent,
		ScheduleItemDetailComponent
	],
	providers: [
		ScheduleService
	],
	entryComponents: [
		ScheduleComponent,
		ScheduleDetailComponent
	]
})
export class ScheduleModule {}
