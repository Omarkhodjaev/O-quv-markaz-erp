import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExamsResultsService } from './exams-results.service';
import { CreateExamsResultDto } from './dto/create-exams-result.dto';
import { UpdateExamsResultDto } from './dto/update-exams-result.dto';

@Controller('exams-results')
export class ExamsResultsController {
  constructor(private readonly examsResultsService: ExamsResultsService) {}

  @Post()
  create(@Body() createExamsResultDto: CreateExamsResultDto) {
    return this.examsResultsService.create(createExamsResultDto);
  }

  @Get()
  findAll() {
    return this.examsResultsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examsResultsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExamsResultDto: UpdateExamsResultDto) {
    return this.examsResultsService.update(+id, updateExamsResultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examsResultsService.remove(+id);
  }
}
