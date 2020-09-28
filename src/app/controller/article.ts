import {
  Inject,
  Controller,
  Provide,
  Get,
  Post,
  Body,
} from '@midwayjs/decorator';
import { Context } from 'egg';
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
  async queryList(@Body() current: number, @Body() pageSize: number) {
    const articleList = await this.articleService.queryList({
      current,
      pageSize,
    });
    return articleList.map(item => item.sourceData);
  }

  @Post('/detail')
  async detail(@Body() id: number) {
    const article = await this.articleService.queryById(id);
    return article.sourceData;
  }
}
