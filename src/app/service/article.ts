import { Config, Inject, Provide } from '@midwayjs/decorator';
import * as mongoose from 'mongoose';
import axios from 'axios';
import { IArticle } from '../types/article';

@Provide()
export class ArticleService {
  @Inject()
  private articleModel!: typeof mongoose.Model;

  async queryList({ current = 1, pageSize = 10 }) {
    const articleList: IArticle[] = await this.articleModel
      .find({})
      .sort({ 'sourceData.created_at': -1 })
      .skip(pageSize * (current - 1))
      .limit(pageSize)
      .lean();
    return articleList;
  }

  async queryById(id: number) {
    const article: IArticle = await this.articleModel.findOne({
      id,
    });
    return article;
  }
}
