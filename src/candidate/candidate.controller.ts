import { Body, Controller, Get, Patch, Post, Put } from '@nestjs/common';
import { Candidate } from 'src/core/entities/candidate.entity';
import { CreateCandidateUseCase } from 'src/core/usecases/get-candidates/create-candidate.usecase';
import { GetCandidatesUseCase } from 'src/core/usecases/get-candidates/get-candidates.usecase';
import { UpdateCandidateUseCase } from 'src/core/usecases/get-candidates/update-candidate.usecase';

@Controller('/api/candidates')
export class CandidateController {
  constructor(
    private readonly createCandidateUseCase: CreateCandidateUseCase,
    private readonly updateCandidateUseCase: UpdateCandidateUseCase,
    private readonly getCandidateUseCase: GetCandidatesUseCase,
  ) {}

  @Get()
  async getCandidates() {
    return await this.getCandidateUseCase.execute();
  }

  @Post()
  async createCandidate(@Body() candidateParameters: Candidate) {
    const response = this.createCandidateUseCase.execute(candidateParameters);
    return response;
  }

  @Patch(':id')
  async partialCandidateUpdateById(@Body() candidateParameters: Candidate) {
    const response = this.updateCandidateUseCase.execute(candidateParameters);
    return response;
  }

  @Put(':id')
  async updateCandidateById(@Body() candidateParameters: Candidate) {
    const response = this.updateCandidateUseCase.execute(candidateParameters);
    return response;
  }
}
