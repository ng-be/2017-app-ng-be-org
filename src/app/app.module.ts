import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';

import {MyApp} from './app.component';

import {AboutModule} from '../pages/about';
import {ContactModule} from '../pages/contact';
import {HomeModule} from '../pages/home';
import {TabsPage} from '../pages/tabs/tabs';

@NgModule({
	declarations: [
		MyApp,
		TabsPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
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
