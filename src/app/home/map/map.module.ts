import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';

// Containers
import {MapComponent} from './containers/map/map.component';

// Components
import {GoogleMapComponent} from './components/google-map/google-map.component';

// Services
import {GoogleMapService} from './services/google-map/google-map.service';

@NgModule({
	imports: [
		IonicModule
	],
	declarations: [
		MapComponent,
		GoogleMapComponent
	],
	providers: [
		GoogleMapService
	],
	entryComponents: [
		MapComponent
	]
})
export class MapModule {}
