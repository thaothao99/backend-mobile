import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './modules/account/account.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs-app', { useNewUrlParser: true }),
    AccountModule
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
