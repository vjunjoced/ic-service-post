import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable({})
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get rmqUrl(): string {
    return this.configService.get('appConfig.rmqUrl');
  }

  get servicePostQueue(): string {
    return this.configService.get('appConfig.servicePostQueue');
  }
}
