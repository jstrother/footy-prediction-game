import { Test, TestingModule } from '@nestjs/testing';
import { SoccerApiController } from './soccer-api.controller';

describe('SoccerApi Controller', () => {
  let controller: SoccerApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoccerApiController],
    }).compile();

    controller = module.get<SoccerApiController>(SoccerApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
