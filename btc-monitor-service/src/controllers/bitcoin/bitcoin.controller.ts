import { Controller, Get, Param } from '@nestjs/common';
import { BitcoinService } from 'src/services/bitcoin/bitcoin.service';
import { MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('bitcoin')
export class BitcoinController {
    constructor(private bitcoinService: BitcoinService) {
    }

    @MessagePattern('trade')
    getBtcDataTrade(): any {
        return this.bitcoinService.getDataBTC();
    }

    @MessagePattern('buy-price')
    getBuyPriceBTC(): any {
        return this.bitcoinService.getBuyPriceBTC();
    }

    @MessagePattern('sell-price')
    getSellPriceBTC(): any {
        return this.bitcoinService.getSellPriceBTC();
    }

    @MessagePattern('spread')
    getSpreadBTC(): any {
        return this.bitcoinService.getSpreadBTC();
    }

    @MessagePattern('rsi')
    getRSIBTC(): any {
        return this.bitcoinService.getRSI();
    }

    @MessagePattern('typeprice')
    getTypPrice(): any {
        return this.bitcoinService.getTypPrice();
    }
}