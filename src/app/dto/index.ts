import { Rule, RuleType } from '@midwayjs/decorator';

export class ArticleListQueryDTO {
  @Rule(RuleType.number().required())
  current: number;

  @Rule(RuleType.number())
  pageSize: number;
}

export class ArticleDetailQueryDTO {
  @Rule(RuleType.number().required())
  id: number;
}
