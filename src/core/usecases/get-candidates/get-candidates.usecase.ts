import { UseCase } from '../../base/use-case';
import { CandidateRepository } from '../../repositories/candidates/candidates.repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ExcelService } from 'src/excel.service';
import { Candidate } from 'src/core/entities/candidate.entity';
import { CandidateDetail } from 'src/core/entities/candidate-detail.entity';
import { mergeById } from 'src/utils/mergeById';

@Injectable()
export class GetCandidatesUseCase implements UseCase<void, Candidate[]> {
  constructor(
    private readonly excelService: ExcelService,
    private readonly candidatesRepository: CandidateRepository,
  ) {}

  execute(): Promise<Candidate[]> {
    const excelData = this.excelService.readExcelFile(
      './databases/candidates.xlsx',
    ) as CandidateDetail[];
    const database = this.candidatesRepository.getCandidates();
    let dataset = [];
    try {
      if (!!database && !!excelData) {
        dataset = mergeById(database, excelData);
      }
      return new Promise((resolve) => resolve(dataset));
    } catch (error) {
      const httpException = new HttpException(error, HttpStatus.BAD_REQUEST);
      throw httpException;
    }
  }
}
