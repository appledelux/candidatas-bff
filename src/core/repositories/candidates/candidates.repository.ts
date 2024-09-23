import { Candidate } from 'src/core/entities/candidate.entity';

export abstract class CandidateRepository {
  abstract getCandidates(): Candidate[];
  abstract createCandidate(candidate: Candidate): Candidate;
  abstract updateCandidate(candidate: Candidate): Candidate;
}
