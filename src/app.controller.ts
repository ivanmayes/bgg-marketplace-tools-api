const fs = require('fs');
const SFTPClient = require('ssh2-sftp-client');

import { Controller, Get, Query, Param, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	private debug = process.env.DEBUG;

	constructor(
		private readonly appService: AppService
	) {}

	/**
	 * Get the overall status of the program.  This informs the entire UI.
	 * @param userId
	 */
	@Get('getMarketplaceItems')
	async getStatus(@Query('id') id?: string,): Promise<any> {
		if (!id) {
			throw new HttpException('No User Id', HttpStatus.NOT_ACCEPTABLE);
		}


		return {};
	}

}
