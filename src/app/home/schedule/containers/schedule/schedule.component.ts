import {Component, OnInit, OnDestroy} from '@angular/core';
import {takeUntil} from 'rxjs/operators/takeUntil';
import {Destroy} from 'ngx-reactivetoolkit';

import {ScheduleService} from '../../services/schedule/schedule.service';

@Component({
	selector: 'schedule',
	templateUrl: 'schedule.component.html'
})
export class ScheduleComponent implements OnInit, OnDestroy {
	schedule$ = this.scheduleService.schedule$;
	@Destroy() destroy$;

	constructor(
		private scheduleService: ScheduleService
	) {}

	ngOnInit() {
		this.scheduleService.loadSchedule().pipe(
			takeUntil(this.destroy$)
		).subscribe();
	}

	ngOnDestroy() {
		// Remove in the future https://github.com/brechtbilliet/ngxReactiveToolkit/issues/1
	}
}
