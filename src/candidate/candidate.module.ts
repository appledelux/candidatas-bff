import { Module } from '@nestjs/common';
import { CandidateController } from './candidate.controller';
import { ExcelService } from 'src/excel.service';
import { GetCandidatesUseCase } from 'src/core/usecases/get-candidates/get-candidates.usecase';
import { CandidateRepository } from 'src/core/repositories/candidates/candidates.repository';
import { CandidatesImplRepository } from 'src/data/repositories/candidates/candidates-impl.repository';
import { CreateCandidateUseCase } from 'src/core/usecases/get-candidates/create-candidate.usecase';
import { UpdateCandidateUseCase } from 'src/core/usecases/get-candidates/update-candidate.usecase';
@Module({
  imports: [],
  controllers: [CandidateController],
  providers: [
    GetCandidatesUseCase,
    CreateCandidateUseCase,
    UpdateCandidateUseCase,
    { provide: CandidateRepository, useClass: CandidatesImplRepository },
    ExcelService,
  ],
})
export class CandidateModule {}
