import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';

import {ContactComponent} from './containers/contact/contact.component';

@NgModule({
	imports: [
		IonicModule
	],
	declarations: [
		ContactComponent
	],
	entryComponents: [
		ContactComponent
	]
})
export class ContactModule {}
