import { Module } from '@nestjs/common';
import { ExamsResultsService } from './exams-results.service';
import { ExamsResultsController } from './exams-results.controller';

@Module({
  controllers: [ExamsResultsController],
  providers: [ExamsResultsService],
})
export class ExamsResultsModule {}
