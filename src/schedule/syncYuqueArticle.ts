import { CommonSchedule, Provide, Schedule } from '@midwayjs/decorator';

@Provide()
@Schedule({
  interval: '1s', // 2.333s 间隔
  type: 'worker', // 指定某一个 worker 执行
})
export class HelloCron implements CommonSchedule {
  // 定时执行的具体任务
  async exec(ctx) {
    console.log('Schedule');
  }
}
