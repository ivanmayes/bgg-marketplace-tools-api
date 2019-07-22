// Handle environment file
let fs = require('fs');
if(fs.existsSync('.env')) {
    require('dotenv').config();
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe());
	app.enableCors();
	await app.listen(process.env.PORT || 8001);
}
bootstrap();
