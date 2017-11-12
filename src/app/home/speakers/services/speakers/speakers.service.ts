import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Storage} from '@ionic/storage';
import {Observable} from 'rxjs/Observable';
import {tap} from 'rxjs/operators/tap';
import {map} from 'rxjs/operators/map';
import {publishReplay} from 'rxjs/operators/publishReplay';
import {refCount} from 'rxjs/operators/refCount';
import {AngularFireDatabase} from 'angularfire2/database';

import {SetSpeakers} from '../../actions/speakers';

import * as speakers from '../../reducers/index';
import {Speaker} from '../../interfaces/speaker';

@Injectable()
export class SpeakersService {
	speakers$ = this.store.select(speakers.getSpeakers).pipe(
		publishReplay(),
		refCount()
	);

	loading$ = this.speakers$.pipe(
		map(x => !x),
		publishReplay(),
		refCount()
	);

	constructor(
		private store: Store<speakers.State>,
		private db: AngularFireDatabase,
		private storage: Storage
	) {}

	loadSpeakers() {
		this.storage.get('speakers').then((localSpeakers: Speaker[]) => {
			if (localSpeakers) {
				this.store.dispatch(new SetSpeakers(localSpeakers));
			}
		});

		return this.db.list('speakers')
			.valueChanges<Speaker>()
			.pipe(
				tap((data: Speaker[]) => {
					this.storage.set('speakers', data);
					this.store.dispatch(new SetSpeakers(data));
				})
			);
	}
}
