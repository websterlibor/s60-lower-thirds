import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LtModule } from './lt/lt.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [LtModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
