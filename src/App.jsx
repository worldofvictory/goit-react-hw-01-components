
import { Profile } from './components/Profile/profile';
import { Statistics } from './components/Statistics/statistic';
import { GetFriendList } from './components/Friends/FriendsItem';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory'

 
import data from './data/data.json'
import user from './data/user.json'
import friends from './data/friends.json'
import transactions from './data/transactions.json'
import FriendsList from 'components/Friends/friendList';


export const App = () => {
  return (
    <div>
      <Profile
    id={user.id}
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
      />
       <FriendsList
        friends={friends} />
      <Statistics title="Upload stats" stats={data} />
          
      <TransactionHistory items={transactions} />
     
     
    </div>
  
  );

}

export default App
