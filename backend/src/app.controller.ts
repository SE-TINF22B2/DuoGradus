import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Ping
   * @returns {string} "pong"
   */
  @Get('/ping')
  getPing(): string {
    return this.appService.getPing();
  }
}
