import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoccerApiModule } from './soccer-api/soccer-api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get('DATABASE_URI'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
    SoccerApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
