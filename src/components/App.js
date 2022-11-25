import user from '../user.json';
import data from '../data.json';
import { Profile } from './Profile';
import { Statistics } from './Statistics';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={data} />
    </div>
  );
};
