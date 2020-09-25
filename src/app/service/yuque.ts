import { Config, Inject, Provide } from '@midwayjs/decorator';
import * as mongoose from 'mongoose';
import axios from 'axios';

@Provide()
export class YuqueService {
  private readonly YUQUE_HOST = 'https://www.yuque.com/api/v2';

  @Config('yuque')
  yuqueConfig: {
    token: string;
  };

  @Inject()
  private articleModel!: typeof mongoose.Model;

  /**
   * 同步语鹊文章
   */
  async syncBlogList() {
    const { token } = this.yuqueConfig;
    const result = await axios.get(
      `${this.YUQUE_HOST}/repos/lixin-wbtdl/blog/docs`,
      {
        headers: {
          'User-Agent': 'lixin-blog',
          'X-Auth-Token': token,
        },
      }
    );
    const articleList = result.data.data;
    for (let i = 0; i < articleList.length; i++) {
      const article = await this.articleModel.findOneAndUpdate(
        { id: articleList[i].id },
        {
          $set: {
            sourceData: articleList[i],
          },
        },
        {
          upsert: true,
        }
      );
    }
    return result.data.data;
  }
}
