import { ConfigModule, registerAs } from '@nestjs/config';

export interface AppConfig {
  rmqUrl: string;
  servicePostQueue: string;
}

const AppConfig = registerAs<AppConfig>('appConfig', () => {
  return {
    rmqUrl: process.env.RMQ_URL,
    servicePostQueue: process.env.SERVICE_POST_QUEUE,
  };
});

export const AppConfigModule = ConfigModule.forRoot({
  envFilePath: '.env',
  isGlobal: true,
  load: [AppConfig],
});
