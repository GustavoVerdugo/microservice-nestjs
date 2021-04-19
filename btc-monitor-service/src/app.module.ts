import { Module, HttpModule, CacheModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BitcoinService } from './services/bitcoin/bitcoin.service';
import { BitcoinController } from './controllers/bitcoin/bitcoin.controller';

@Module({
  imports: [HttpModule, CacheModule.register()],
  controllers: [AppController, BitcoinController],
  providers: [AppService, BitcoinService],
})
export class AppModule {}
