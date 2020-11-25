import { Context, EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as mongoose from 'mongoose';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  config.keys = appInfo.name + '_1601005102076_5946';

  config.onerror = {
    html(err: any, ctx: any) {
      console.log('err: ', err);
      ctx.body = `<p>${err.message}</p>`;
      ctx.status = 500;
    },
  };

  config.yuque = {
    token: '5vWupeOD5YIQrLVHs32I1Cb2AF9n7VToBTW6r6wR',
  };

  config.mongoose = {
    url:
      'mongodb://system:82213175@47.99.159.40:27017/blog-lx?authSource=blog-lx',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    } as mongoose.ConnectionOptions,
  };

  // add your config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.cors = {
    credentials: true,
    origin: (ctx: Context) => ctx.get('origin'),
  };

  return config;
};
