import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';

// Containers
import {MapComponent} from './containers/map/map.component';

// Components
import {GoogleMapComponent} from './components/google-map/google-map.component';

@NgModule({
	imports: [
		IonicModule
	],
	declarations: [
		MapComponent,
		GoogleMapComponent
	],
	entryComponents: [
		MapComponent
	]
})
export class MapModule {}
