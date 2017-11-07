import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';

import {AboutComponent} from './containers/about/about.component';

@NgModule({
	imports: [
		IonicModule
	],
	declarations: [
		AboutComponent
	],
	entryComponents: [
		AboutComponent
	]
})
export class AboutModule {}
