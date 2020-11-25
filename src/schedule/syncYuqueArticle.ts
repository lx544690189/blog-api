// src/schedule/hello.ts
import { Provide, Schedule, CommonSchedule } from '@midwayjs/decorator';

@Provide()
@Schedule({
  interval: 1000 * 60 * 60, //一个小时
  type: 'worker',
})
export class HelloCron implements CommonSchedule {
  /**
   * 每小时同步一次语鹊文章
   * @param ctx
   */
  async exec(ctx) {
    // console.log('CommonSchedule');
    // ctx.logger.info(process.pid, 'hello');
  }
}
