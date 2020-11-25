import { Configuration } from '@midwayjs/decorator';
import * as swagger from '@midwayjs/swagger';

@Configuration({
  imports: [
    {
      component: swagger,
      enabledEnvironment: ['local'],
    },
  ],
})
export class ContainerConfiguration {}
