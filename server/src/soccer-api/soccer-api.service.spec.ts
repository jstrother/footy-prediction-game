import { Test, TestingModule } from '@nestjs/testing';
import { SoccerApiService } from './soccer-api.service';

describe('SoccerApiService', () => {
  let service: SoccerApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoccerApiService],
    }).compile();

    service = module.get<SoccerApiService>(SoccerApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
