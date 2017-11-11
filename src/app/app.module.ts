import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {AngularFireModule} from 'angularfire2';

import {firebaseConfig} from './app.config';

import {MyApp} from './app.component';
import {HomeModule} from './home/home.module';
import {HomeComponent} from './home/home.component';

@NgModule({
	declarations: [
		MyApp
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		AngularFireModule.initializeApp(firebaseConfig),
		HomeModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp
	],
	providers: [
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule {}
