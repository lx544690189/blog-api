import { Inject, Controller, Provide, Get } from '@midwayjs/decorator';
import { Context } from 'egg';
import { YuqueService } from '../service/yuque';

@Provide()
@Controller('/article')
export class ArticleController {
  @Inject()
  ctx: Context;

  @Inject()
  yuqueService: YuqueService;

  @Get('/sync')
  async sync() {
    const result = await this.yuqueService.syncBlogList();
    return result;
  }
}
