import { Home } from './home';

export interface HomeActivity {
  id: string;
  action: string;
  currentHome: Home;
  date: Date;
}
