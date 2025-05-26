import { Injectable } from '@nestjs/common';
import { CreateExamsResultDto } from './dto/create-exams-result.dto';
import { UpdateExamsResultDto } from './dto/update-exams-result.dto';

@Injectable()
export class ExamsResultsService {
  create(createExamsResultDto: CreateExamsResultDto) {
    return 'This action adds a new examsResult';
  }

  findAll() {
    return `This action returns all examsResults`;
  }

  findOne(id: number) {
    return `This action returns a #${id} examsResult`;
  }

  update(id: number, updateExamsResultDto: UpdateExamsResultDto) {
    return `This action updates a #${id} examsResult`;
  }

  remove(id: number) {
    return `This action removes a #${id} examsResult`;
  }
}
