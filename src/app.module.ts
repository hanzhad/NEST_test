import { Module } from '@nestjs/common';
import { configModule, dbConnection } from './config.root';

@Module({
  imports: [
    configModule,
    dbConnection,
  ],
})
export class AppModule {
}
