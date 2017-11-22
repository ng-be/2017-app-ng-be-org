import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {Store} from '@ngrx/store';
import {AngularFireDatabase} from 'angularfire2/database';
import {tap} from 'rxjs/operators/tap';
import {map} from 'rxjs/operators/map';

import {SetSchedule} from '../../actions/schedule';

import * as schedule from '../../reducers/index';
import {ScheduleItem} from '../../interfaces/schedule-item';

@Injectable()
export class ScheduleService {
	schedule$ = this.store.select(schedule.getSchedule);

	constructor(
		private store: Store<schedule.State>,
		private db: AngularFireDatabase,
		private storage: Storage
	) {}

	getItem(id: number) {
		return this.schedule$.pipe(
			map((items: ScheduleItem[]) => items[id])
		);
	}

	loadSchedule() {
		this.storage.get('schedule').then((localSchedule: ScheduleItem[]) => {
			if (localSchedule) {
				this.store.dispatch(new SetSchedule(localSchedule));
			}
		});

		return this.db.list<ScheduleItem>('schedule').valueChanges().pipe(
			tap((data: ScheduleItem[]) => {
				this.storage.set('schedule', data);
				this.store.dispatch(new SetSchedule(data));
			})
		);
	}
}
