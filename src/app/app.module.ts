import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {AngularFireModule} from 'angularfire2';

import {firebaseConfig} from './app.config';

import {MyApp} from './app.component';
import {TabsPage} from '../pages/tabs/tabs';

// Features
import {AboutModule} from '../pages/about';
import {ContactModule} from '../pages/contact';
import {HomeModule} from '../pages/home';

@NgModule({
	declarations: [
		MyApp,
		TabsPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		AngularFireModule.initializeApp(firebaseConfig),
		HomeModule,
		ContactModule,
		AboutModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		TabsPage
	],
	providers: [
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule {}
