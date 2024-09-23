import { UseCase } from '../../base/use-case';
import { CandidateRepository } from '../../repositories/candidates/candidates.repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ExcelService } from 'src/excel.service';
import { Candidate } from 'src/core/entities/candidate.entity';


@Injectable()
export class UpdateCandidateUseCase implements UseCase<Candidate, Candidate> {
  constructor(
    private readonly excelService: ExcelService,
    private readonly candidatesRepository: CandidateRepository,
  ) {}

  execute(candidate: Candidate): Promise<Candidate> {
    let dataset = null;
    try {
      if (!candidate) {
        const httpException = new HttpException(
          'Bad Params.',
          HttpStatus.BAD_REQUEST,
        );
        throw httpException;
      }

      return new Promise((resolve) => resolve(dataset));
    } catch (error) {
      const httpException = new HttpException(
        error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
      throw httpException;
    }
  }
}
