import {Component} from '@angular/core';

import {HomeComponent} from './home/home.component';

@Component({
	templateUrl: 'app.component.html'
})
export class MyApp {
	rootPage: any = HomeComponent;
}
