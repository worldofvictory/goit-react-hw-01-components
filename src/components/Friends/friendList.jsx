
import FriendItem from "./friends"
import css from './friends.module.css';

export default function FriendsList({ friends }) {
    return (
        <ul className={css.list}> 
            {friends.map(friend => (<friends
                key={friend.id}
                isOnline={friend.isOnline}
                name={friend.name}
                avatar={friend.avatar}
            />))}
        </ul>
    )
}