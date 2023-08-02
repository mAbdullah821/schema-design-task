import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoURL } from './mongoDB-url.constant';

@Module({
  imports: [MongooseModule.forRoot(mongoURL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
