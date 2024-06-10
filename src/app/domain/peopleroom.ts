import { Member } from './member';
import { Room } from './room';

export class PeopleRoom extends Room {
  occupants!: Member[];
  constructor() {
    super();
  }
}
