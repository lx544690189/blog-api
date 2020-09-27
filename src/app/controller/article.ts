import {
  Inject,
  Controller,
  Provide,
  Get,
  Post,
  Body,
} from '@midwayjs/decorator';
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

  @Post('/list')
  async queryList(@Body() current: number, @Body() pageSize: number) {
    const articleList = await this.yuqueService.queryList({
      current,
      pageSize,
    });
    // const resData = [];
    return articleList.map(item => item.sourceData);
  }
}
