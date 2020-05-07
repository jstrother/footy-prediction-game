import { Module } from '@nestjs/common';
import { SoccerApiController } from './soccer-api.controller';
import { SoccerApiService } from './soccer-api.service';

@Module({
  controllers: [SoccerApiController],
  providers: [SoccerApiService],
})
export class SoccerApiModule {}
