import { Config, Inject, Provide } from '@midwayjs/decorator';
import * as mongoose from 'mongoose';
import axios from 'axios';
import { IArticle } from '../types/article';

@Provide()
export class ArticleService {
  @Inject()
  private articleModel!: typeof mongoose.Model;

  async queryList({ current = 1, pageSize = 10 }) {
    const articleList: any[] = await this.articleModel
      .find({})
      .sort({ 'sourceData.created_at': -1 })
      .skip(pageSize * (current - 1))
      .limit(pageSize)
      .lean();
    const resData = articleList.map(item => {
      const {
        id,
        slug,
        title,
        description,
        custom_description,
        created_at,
        updated_at,
        published_at,
        first_published_at,
        word_count,
        status,
      } = item.sourceData;
      return {
        id,
        slug,
        title,
        description,
        custom_description,
        created_at,
        updated_at,
        published_at,
        first_published_at,
        word_count,
        status,
      };
    });
    return resData;
  }

  async queryById(id: number) {
    const article: any = await this.articleModel.findOne({
      id,
    });
    const {
      slug,
      title,
      description,
      custom_description,
      body_html,
      created_at,
      updated_at,
      published_at,
      first_published_at,
      word_count,
      status,
    } = article.sourceData;
    return {
      slug,
      title,
      description,
      custom_description,
      body_html,
      created_at,
      updated_at,
      published_at,
      first_published_at,
      word_count,
      status,
    };
  }
}
