import { NgModule } from '@angular/core';
import { EneasysAccountAuthModule } from './auth/auth.module';
import { EneasysAccountLayoutModule } from './layout/layout.module';

@NgModule({
	imports: [ 
		EneasysAccountAuthModule,
		EneasysAccountLayoutModule,

	],
	exports: [
		EneasysAccountAuthModule,
		EneasysAccountLayoutModule,
	],
})
export class EneasysAccountCoreModule {}