import { Injectable } from '@nestjs/common';
import { CandidateModel } from 'src/data/schemas/candidate.schema';
import { Candidate } from 'src/core/entities/candidate.entity';
import { CandidateRepository } from 'src/core/repositories/candidates/candidates.repository';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const dbLocal = require('db-local');
const { Schema } = new dbLocal({ path: './databases' });

@Injectable()
export class CandidatesImplRepository extends CandidateRepository {
  candidateSchema = null;

  constructor() {
    super();
    this.candidateSchema = Schema('Candidate', CandidateModel);
  }

  override getCandidates(): Candidate[] {
    return this.candidateSchema.find() as Candidate[];
  }

  override createCandidate(candidate: Candidate): Candidate {
    return this.candidateSchema.create(candidate);
  }
  override updateCandidate(partialCandidate: Candidate): Candidate {
    return this.candidateSchema.update(partialCandidate);
  }
}
