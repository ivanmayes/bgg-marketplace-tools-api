import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { EnvelopeInterceptor } from './core/envelope.interceptor';

@Module({
	imports: [
		HttpModule
	],
	controllers: [AppController],
	providers: [
		AppService,
		{
			provide: APP_INTERCEPTOR,
			useClass: EnvelopeInterceptor
		},
	],
})
export class AppModule {}
