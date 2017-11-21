import {Component, OnInit, OnDestroy} from '@angular/core';
import {App} from 'ionic-angular';
import {takeUntil} from 'rxjs/operators/takeUntil';
import {Destroy} from 'ngx-reactivetoolkit';

// Components
import {ScheduleDetailComponent} from '../schedule-detail/schedule-detail.component';

// Services
import {ScheduleService} from '../../services/schedule/schedule.service';

@Component({
	selector: 'schedule',
	templateUrl: 'schedule.component.html'
})
export class ScheduleComponent implements OnInit, OnDestroy {
	schedule$ = this.scheduleService.schedule$;
	@Destroy() destroy$;

	constructor(
		private scheduleService: ScheduleService,
		private appCtrl: App
	) {}

	openDetails(index: number) {
		console.log('push it');

		this.appCtrl.getRootNav().push(ScheduleDetailComponent, {
			id: index
		});
	}

	ngOnInit() {
		this.scheduleService.loadSchedule().pipe(
			takeUntil(this.destroy$)
		).subscribe();
	}

	ngOnDestroy() {
		// Remove in the future https://github.com/brechtbilliet/ngxReactiveToolkit/issues/1
	}
}
