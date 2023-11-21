import { Test, TestingModule } from '@nestjs/testing';
import { SocketNotificationGateway } from './socket-notification.gateway';

describe('SocketNotificationGateway', () => {
  let gateway: SocketNotificationGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocketNotificationGateway],
    }).compile();

    gateway = module.get<SocketNotificationGateway>(SocketNotificationGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
