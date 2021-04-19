import { Injectable, HttpService } from '@nestjs/common';
import { ClientOptions, ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  private client: ClientProxy;
  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8887,
      },
    })
  }

  async getDataBTC() {
    return this.client.send('trade', '');
  }

  async getBuyPriceBTC() {
    return this.client.send('buy-price','')
  }

  async getSellPriceBTC() {
    return this.client.send('sell-price','')
  }

  async getSpreadBTC() {
    return this.client.send('spread','')
  }

  async getRsiBTC() {
    return this.client.send('rsi','')
  }

  async getTypPrice() {
    return this.client.send('typeprice', '');
  }
}

