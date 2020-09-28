import { Inject, Controller, Provide, Get } from '@midwayjs/decorator';
import { Context } from 'egg';
import { ArticleService } from '../service/article';
import { YuqueService } from '../service/yuque';

@Provide()
@Controller('/yuque')
export class YuqueController {
  @Inject()
  ctx: Context;

  @Inject()
  yuqueService: YuqueService;

  @Inject()
  articleService: ArticleService;

  /**
   * 手动同步语鹊文章
   */
  @Get('/sync')
  async sync() {
    const result = await this.yuqueService.syncBlogList();
    return result;
  }
}
