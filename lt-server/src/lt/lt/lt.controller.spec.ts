import { Test, TestingModule } from '@nestjs/testing';
import { LtController } from './lt.controller';

describe('LtController', () => {
  let controller: LtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LtController],
    }).compile();

    controller = module.get<LtController>(LtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
