import {
  Inject,
  Controller,
  Provide,
  Post,
  Body,
  ALL,
  Validate,
} from '@midwayjs/decorator';
import { Context } from 'egg';
import { ArticleListQueryDTO, ArticleDetailQueryDTO } from '../dto';
import { ArticleService } from '../service/article';
import { YuqueService } from '../service/yuque';

@Provide()
@Controller('/article')
export class ArticleController {
  @Inject()
  ctx: Context;

  @Inject()
  yuqueService: YuqueService;

  @Inject()
  articleService: ArticleService;

  /**
   * 查询文章列表（local）
   * @param current
   * @param pageSize
   */
  @Post('/list')
  @Validate()
  async queryList(@Body(ALL) query: ArticleListQueryDTO) {
    console.log('query: ', query);
    const articleList = await this.articleService.queryList(query);
    return articleList;
  }

  /**
   * 查询文章详情
   * @param id
   */
  @Post('/detail')
  async detail(@Body(ALL) query: ArticleDetailQueryDTO) {
    const article = await this.articleService.queryById(query.id);
    return article;
  }
}
