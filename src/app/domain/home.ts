import { Member } from "./member";
import { Room } from "./room";

export interface Home {
  id: string;
  name: string;
  members: Member[];
  rooms: Room[];
}
