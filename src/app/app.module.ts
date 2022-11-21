import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { EneasysAccountCoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { MainModule } from './modules/main/main.module';
import { UserAccountModule } from './modules/user-account/user-account.module';
import { ApiPigesDnaModule, PIGES_DNA_PATH } from 'piges-dna';

@NgModule({
	declarations: [
		AppComponent,

	],
	imports: [
		BrowserModule,
		FlexLayoutModule,

		EneasysAccountCoreModule,
		AppRoutingModule,

		MainModule,
		UserAccountModule,

		ApiPigesDnaModule,

	],
	providers: [
		/*
		{
            provide: PIGES_DNA_PATH,
            useValue: "http://localhost:9081"
        },
		*/
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
