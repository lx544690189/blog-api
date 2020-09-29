import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as mongoose from 'mongoose';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1601005102076_5946';

  config.onerror = {
    html(err: any, ctx: any) {
      console.log('err: ', err);
      ctx.body = `<p>${err.message}</p>`;
      ctx.status = 500;
    },
  };

  // 语鹊token，用于获取专栏信息
  // config.yuque = {
  //   token: '',
  // };

  // mongo url
  // config.mongoose = {
  //   url: '',
  //   options: {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     useCreateIndex: true,
  //   } as mongoose.ConnectionOptions,
  // };

  // add your config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
    },
  };

  return config;
};
