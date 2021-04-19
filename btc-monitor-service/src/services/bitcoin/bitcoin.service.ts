import { Injectable, HttpService } from '@nestjs/common';
import { combineLatest, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class BitcoinService {

    constructor(private httpService: HttpService){
    }

    getDataBTC(){
        return this.httpService.get(`http://rest.coinapi.io/v1/assets/BTC`, {
            headers: {'X-CoinAPI-Key':'B44123DE-9227-419D-AF91-7488C6D46853'}
        }).pipe(
            map(response => response.data)
        )
    }

    async getBuyPriceBTC() {
        return this.httpService.get("https://api.coinbase.com/v2/prices/BTC-USD/buy")
        .pipe(
            map(response => response.data.data.amount)
        )
    }

    async getSellPriceBTC() {
        return this.httpService.get("https://api.coinbase.com/v2/prices/BTC-USD/sell")
        .pipe(
            map(response => response.data.data.amount)
        )
        
    }

    async getSpreadBTC() {
        let b: Observable<number> = await this.getBuyPriceBTC();
        let s: Observable<number> = await this.getSellPriceBTC();
        let res = b.pipe(combineLatest(s), map(([n1, n2]) => Math.abs(n1 - n2)))
        return 'Spread: '+res;
    }

    async getRSI() {
        return this.httpService.get("https://api.taapi.io/rsi?secret=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1heHl2ZXJkdWdvQGdtYWlsLmNvbSIsImlhdCI6MTYxODY3OTQ1MSwiZXhwIjo3OTI1ODc5NDUxfQ.w27frgJGm2hARGc2U11GEaGMHqAdHXw7MMdsp7AFRII&exchange=binance&symbol=BTC/USDT&interval=1h")
        .pipe(
            map(response => 'RSI: ' + response.data.value)
        )
    }

    async getTypPrice() {
        return this.httpService.get("https://api.taapi.io/typprice?secret=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1heHl2ZXJkdWdvQGdtYWlsLmNvbSIsImlhdCI6MTYxODY3OTQ1MSwiZXhwIjo3OTI1ODc5NDUxfQ.w27frgJGm2hARGc2U11GEaGMHqAdHXw7MMdsp7AFRII&exchange=binance&symbol=BTC/USDT&interval=1h")
        .pipe(
            map(response => 'Typical Price BTC: '+response.data.value)
        )
    }
}
