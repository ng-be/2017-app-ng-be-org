import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';

// Containers
import {AboutComponent} from './containers/about/about.component';

// Components
import {PopoverComponent} from './components/popover/popover.component';

@NgModule({
	imports: [
		IonicModule
	],
	declarations: [
		AboutComponent,
		PopoverComponent
	],
	entryComponents: [
		AboutComponent,
		PopoverComponent
	]
})
export class AboutModule {}
