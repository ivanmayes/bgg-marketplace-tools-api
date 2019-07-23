const fs = require('fs');
const request = require('request-promise-native');

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
	@Get('items')
	async getStatus(@Query('id') id?: string,): Promise<any> {
		if (!id) {
			throw new HttpException('No User Id', HttpStatus.NOT_ACCEPTABLE);
		}

		let page = 1;
		let products = [];

		for (let i = 0; i < 100; i++) {
			console.log('getting page', page);

			let resp = await request(`https://api.geekdo.com/api/geekmarket/products?ajax=1&browsetype=browse&colluserid=${id}&condition=any&country=any&currency=any&displaymode=list&eventid=0&findmywants=1&inventorytype=any&marketdomain=boardgame&nosession=1&objectid=0&objecttype=thing&pageid=${page}&productstate=active&shiparea=any&sort=title&stock=instock&userid=0`);
			const data = JSON.parse(resp);

			if (data.products) {
				products = products.concat(data.products);
			}

			if (data.products.length < 50) {
				break;
			}

			page++;
		}

		console.log('processing');
		return products;
	}

}
