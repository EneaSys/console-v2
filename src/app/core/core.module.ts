import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import localeIt from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';

import { EneasysAccountAuthModule } from './auth/auth.module';
import { EneasysAccountLayoutModule } from './layout/layout.module';
import { PigesBackendInterceptor } from './auth.interceptor';

registerLocaleData(localeIt);

@NgModule({
	imports: [ 
		EneasysAccountAuthModule,
		EneasysAccountLayoutModule,

	],
	exports: [
		EneasysAccountAuthModule,
		EneasysAccountLayoutModule,
	],
	providers: [
		{
            provide: HTTP_INTERCEPTORS,
            useClass: PigesBackendInterceptor,
            multi: true
        },
		{ provide: LOCALE_ID, useValue: 'it'},
	]
})
export class EneasysAccountCoreModule {}