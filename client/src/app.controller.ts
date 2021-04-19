import { Controller, Get, Inject, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller('btc')
export class AppController {
  constructor(private appService: AppService) {}

  @Get('trade')
  async getBitCoin() {
    return this.appService.getDataBTC();
  }

  @Get('buy-price')
  async getBuyPriceBTC() {
    return this.appService.getBuyPriceBTC();
  }

  @Get('sell-price')
  async getSellPriceBTC() {
    return this.appService.getSellPriceBTC();
  }

  @Get('spread')
  async getSpreadBTC() {
    return this.appService.getSpreadBTC();
  }

  @Get('rsi')
  async getRsiBTC() {
    return this.appService.getRsiBTC();
  }

  @Get('typeprice')
  async getTypPrice() {
    return this.appService.getTypPrice();
  }
}
