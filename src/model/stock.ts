import { ScopeEnum } from '@midwayjs/decorator';
import { IApplicationContext, providerWrapper } from '@midwayjs/core';
import { MongooseConnection } from '../lib/mongoose';

providerWrapper([
  {
    id: 'articleModel',
    provider: model,
    scope: ScopeEnum.Singleton,
  },
]);
export async function model(context: IApplicationContext) {
  const mongooseConnection: MongooseConnection = await context.getAsync(
    'mongooseConnection'
  );
  const {
    mongoose: { Schema },
    connection,
  } = mongooseConnection;
  const schema = new Schema(
    {
      id: {
        type: Number,
        required: true,
        index: true,
      },
      sourceData: {
        type: Object,
        required: true,
      },
    },
    {
      timestamps: true,
      strict: false,
    }
  );
  return connection.model('article', schema, 'article');
}
