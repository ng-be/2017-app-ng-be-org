import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';

import {HomeComponent} from './containers/home/home.component';

@NgModule({
	imports: [
		IonicModule
	],
	declarations: [
		HomeComponent
	],
	entryComponents: [
		HomeComponent
	]
})
export class HomeModule {}
