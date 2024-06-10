import { Item } from './item';
import { Member } from './member';

export abstract class Room {
  name!: string;
  items!: Item[];
}
