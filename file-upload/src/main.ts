import config from 'config';
import { router, } from './scm-board';
import { Service } from './scm-board/service-fw';

const _svc_conf = config.get<{ name: string; port: number }>('service');

Service(
  {
    name: _svc_conf.name,
    router: router,
    hooks: {
      init: async () => {
        console.info('hooks init ...');
      },
      ready: async () => {
        console.info('hooks ready ...');
      },
      destroy: async () => {
        console.info('hooks destroy ...');
      }
    }
  },
  _svc_conf.port
);
