import { CandidateDetail } from './candidate-detail.entity';

export class Candidate {
  _id: number;
  name: string;
  surname: string;
  details: CandidateDetail;
}
