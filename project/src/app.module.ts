import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware, LoggerMiddleware2 } from './app.middleware';
import { DemoModule } from "./modules/demo/demo.module";

@Module({
  imports: [
    DemoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, LoggerMiddleware2)
      .forRoutes(AppController);
  }
}
