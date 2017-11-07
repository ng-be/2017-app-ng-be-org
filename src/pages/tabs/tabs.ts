import {Component} from '@angular/core';

import {AboutComponent} from '../about';
import {ContactComponent} from '../contact';
import {HomeComponent} from '../home';

@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {
	tab1Root = HomeComponent;
	tab2Root = AboutComponent;
	tab3Root = ContactComponent;
}
